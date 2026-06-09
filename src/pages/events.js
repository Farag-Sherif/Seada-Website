import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";
import { events as fetchEvents, event as fetchEvent } from "../server/api";

// ─────────────────────────────────────────────
// Adapter: maps raw API shape → component shape
// ─────────────────────────────────────────────
const adaptEvent = (raw) => {
  const en = raw.translations?.find((t) => t.locale === "en") || {};
  const ar = raw.translations?.find((t) => t.locale === "ar") || {};

  const dateObj = raw.date ? new Date(raw.date) : null;
  const now = new Date();

  const formattedDate = dateObj
    ? {
        en: {
          day: dateObj.getDate(),
          month: dateObj.toLocaleString("en-US", { month: "long" }),
          label: dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
        ar: {
          day: dateObj.getDate(),
          month: dateObj.toLocaleString("ar-EG", { month: "long" }),
          label: dateObj.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      }
    : null;

  return {
    id: raw.id,
    status: dateObj && dateObj > now ? "upcoming" : "past",
    type: raw.type || "image", // extend when API adds a type field
    thumbnailUrl: raw.file_path || "",
    mediaUrl: raw.file_path || "",

    title: {
      en: en.title || raw.title || "",
      ar: ar.title || raw.title || "",
    },
    description: {
      en: en.description || raw.description || "",
      ar: ar.description || raw.description || "",
    },
    location: {
      en: en.place || raw.place || "",
      ar: ar.place || raw.place || "",
    },
    date: formattedDate,
    time: {
      en: dateObj
        ? dateObj.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
      ar: dateObj
        ? dateObj.toLocaleTimeString("ar-EG", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
    },
  };
};

const adaptEvents = (rawList) =>
  Array.isArray(rawList) ? rawList.map(adaptEvent) : [];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const EventsPage = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpPhone, setRsvpPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API state
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch all events on mount
  useEffect(() => {
    const loadEvents = async () => {
      setEventsLoading(true);
      setEventsError(null);
      try {
        const raw = await fetchEvents();
        setEvents(adaptEvents(raw));
      } catch (err) {
        setEventsError(
          isRTL
            ? "فشل تحميل الفعاليات. يرجى المحاولة مجدداً."
            : "Failed to load events. Please try again.",
        );
      } finally {
        setEventsLoading(false);
      }
    };
    loadEvents();
  }, []);

  // Fetch single event when "View Details" is clicked
  const handleViewDetails = async (eventId) => {
    setModalLoading(true);
    setSelectedEvent({}); // open modal in loading state
    try {
      const raw = await fetchEvent(eventId);
      setSelectedEvent(adaptEvent(raw));
    } catch (err) {
      toast.error(
        isRTL ? "فشل تحميل تفاصيل الفعالية." : "Failed to load event details.",
      );
      setSelectedEvent(null);
    } finally {
      setModalLoading(false);
    }
  };

  // ── i18n strings ──────────────────────────
  const pageTitle = isRTL
    ? "فعاليات الأغذية العضوية والمهرجانات | سعده"
    : "Organic Food Events & Festivals | Seada";
  const metaDescription = isRTL
    ? "انضم إلى مهرجانات الطعام العضوي، وعروض الطهي الحية، وورش التغذية الحصرية من سعده."
    : "Join Seada's organic food festivals, live cooking shows, and wellness seminars. Experience fresh living.";

  const sectionHeading = isRTL
    ? "فعاليات ومهرجانات سعده"
    : "Seada Food Festivals & Events";
  const sectionSubheading = isRTL
    ? "اكتشف فعالياتنا الحصرية لتذوق الأطعمة الفاخرة، ودروس الطهي الصحي، وندوات التغذية المفيدة."
    : "Discover our exclusive gourmet tastings, healthy cooking masterclasses, and organic food showcases.";

  const textAll = isRTL ? "الكل" : "All Events";
  const textUpcoming = isRTL ? "القادمة" : "Upcoming";
  const textPast = isRTL ? "السابقة" : "Past Events";
  const textViewDetails = isRTL ? "عرض التفاصيل" : "View Details";
  const textRsvpTitle = isRTL ? "احجز مكانك في الفعالية" : "Reserve Your Spot";
  const textRsvpDesc = isRTL
    ? "المقاعد محدودة لضمان أفضل تجربة تذوق وتدريب. يرجى تأكيد حضورك أدناه."
    : "Seats are limited to ensure the best tasting and learning experience. Confirm your attendance below.";
  const textRsvpName = isRTL ? "الاسم الكامل" : "Full Name";
  const textRsvpEmail = isRTL ? "البريد الإلكتروني" : "Email Address";
  const textRsvpPhone = isRTL ? "رقم الهاتف" : "Phone Number";
  const textRsvpSubmit = isRTL ? "تأكيد الحضور" : "Confirm Attendance";
  const textRsvpSubmitting = isRTL ? "جاري التأكيد..." : "Confirming...";

  // ── Filtering ─────────────────────────────
  const filteredEvents = events.filter((event) => {
    if (activeTab === "all") return true;
    return event.status === activeTab;
  });

  // ── RSVP submit ───────────────────────────
  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail || !rsvpPhone) {
      toast.error(
        isRTL
          ? "يرجى ملء جميع الحقول لتأكيد الحجز."
          : "Please fill all fields to confirm RSVP.",
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        isRTL
          ? `شكراً لك يا ${rsvpName}! تم تأكيد طلب الحجز الخاص بك لـ "${selectedEvent.title?.ar}".`
          : `Thank you, ${rsvpName}! Your RSVP for "${selectedEvent.title?.en}" has been confirmed.`,
      );
      setRsvpName("");
      setRsvpEmail("");
      setRsvpPhone("");
      setSelectedEvent(null);
    }, 1500);
  };

  // ── Render ────────────────────────────────
  return (
    <CommonLayout
      parent={isRTL ? "الرئيسية" : "Home"}
      title={isRTL ? "الفعاليات" : "Events"}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <section
        className="seada-events-section"
        style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <div className="container">
          {/* Header */}
          <div className="events-header-title">
            <h2>{sectionHeading}</h2>
            <p>{sectionSubheading}</p>
          </div>

          {/* Filter Tabs */}
          <div className="events-filter-tabs">
            <button
              className={`filter-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}>
              {textAll}
            </button>
            <button
              className={`filter-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}>
              {textUpcoming}
            </button>
            <button
              className={`filter-btn ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}>
              {textPast}
            </button>
          </div>

          {/* Loading */}
          {eventsLoading && (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">
                  {isRTL ? "جاري التحميل..." : "Loading..."}
                </span>
              </div>
            </div>
          )}

          {/* Error */}
          {eventsError && (
            <div className="alert alert-danger text-center" role="alert">
              {eventsError}
            </div>
          )}

          {/* Empty */}
          {!eventsLoading && !eventsError && filteredEvents.length === 0 && (
            <div className="alert alert-secondary text-center" role="alert">
              {isRTL
                ? "لا توجد فعاليات في هذه الفئة حالياً."
                : "No events found in this category."}
            </div>
          )}

          {/* Timeline */}
          {!eventsLoading && !eventsError && filteredEvents.length > 0 && (
            <div className="events-timeline-container">
              {filteredEvents.map((event) => {
                const dateObj = isRTL ? event.date?.ar : event.date?.en;
                const isPlaying = playingVideoId === event.id;

                return (
                  <div key={event.id} className="timeline-item">
                    <div className="timeline-node"></div>

                    {/* Media Column */}
                    <div className="timeline-media-col">
                      <div className="timeline-media-container">
                        <div className="timeline-media-wrapper">
                          {event.type === "video" && isPlaying ? (
                            <div className="inline-video-container">
                              <video src={event.mediaUrl} controls autoPlay />
                              <div
                                className="close-inline-video"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPlayingVideoId(null);
                                }}
                                title={isRTL ? "إغلاق الفيديو" : "Close Video"}>
                                <i className="fa fa-times"></i>
                              </div>
                            </div>
                          ) : (
                            <>
                              <img
                                src={event.thumbnailUrl}
                                alt={isRTL ? event.title?.ar : event.title?.en}
                              />
                              {event.type === "video" && (
                                <div
                                  className="video-play-overlay"
                                  onClick={() => setPlayingVideoId(event.id)}>
                                  <div className="play-button-icon">
                                    <i className="fa fa-play"></i>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        {/* Date Badge */}
                        <div className="timeline-date-badge-wrapper">
                          <div className="timeline-date-badge">
                            <i className="fa fa-calendar-o"></i>
                            <span>
                              {dateObj?.day} {dateObj?.month}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="timeline-content-col">
                      <div className="timeline-content-card">
                        <h3 className="event-title">
                          {isRTL ? event.title?.ar : event.title?.en}
                        </h3>
                        <p className="event-desc">
                          {isRTL
                            ? event.description?.ar
                            : event.description?.en}
                        </p>
                        <button
                          className="event-details-btn"
                          onClick={() => handleViewDetails(event.id)}>
                          {textViewDetails}
                          <i
                            className={`fa ${isRTL ? "fa-angle-left" : "fa-angle-right"}`}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Details & RSVP Modal */}
      {selectedEvent !== null && (
        <div
          className="event-details-modal-overlay"
          onClick={() => setSelectedEvent(null)}
          style={{ zIndex: "9999999999999999" }}>
          <div
            className="event-details-modal"
            onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <div
              className="modal-close-btn"
              onClick={() => setSelectedEvent(null)}>
              <i className="fa fa-times"></i>
            </div>

            {/* Modal Loading */}
            {modalLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">
                    {isRTL ? "جاري التحميل..." : "Loading..."}
                  </span>
                </div>
              </div>
            ) : (
              <>
                {/* Hero Media */}
                <div className="modal-hero-media">
                  {selectedEvent.type === "video" ? (
                    <video
                      src={selectedEvent.mediaUrl}
                      controls
                      poster={selectedEvent.thumbnailUrl}
                    />
                  ) : (
                    <img
                      src={selectedEvent.mediaUrl}
                      alt={
                        isRTL
                          ? selectedEvent.title?.ar
                          : selectedEvent.title?.en
                      }
                    />
                  )}
                </div>

                {/* Modal Body */}
                <div
                  className="modal-body-content"
                  style={{ direction: isRTL ? "rtl" : "ltr" }}>
                  <div className="modal-meta-row">
                    <div className="modal-meta-item">
                      <i className="fa fa-calendar"></i>
                      <span>
                        {isRTL
                          ? selectedEvent.date?.ar?.label
                          : selectedEvent.date?.en?.label}
                      </span>
                    </div>
                    <div className="modal-meta-item">
                      <i className="fa fa-map-marker"></i>
                      <span>
                        {isRTL
                          ? selectedEvent.location?.ar
                          : selectedEvent.location?.en}
                      </span>
                    </div>
                    <div className="modal-meta-item">
                      <i className="fa fa-clock-o"></i>
                      <span>
                        {isRTL
                          ? selectedEvent.time?.ar
                          : selectedEvent.time?.en}
                      </span>
                    </div>
                  </div>

                  <h2 className="modal-event-title">
                    {isRTL ? selectedEvent.title?.ar : selectedEvent.title?.en}
                  </h2>

                  <p className="modal-event-description">
                    {isRTL
                      ? selectedEvent.description?.ar
                      : selectedEvent.description?.en}
                  </p>

                  {/* RSVP Form — upcoming events only */}
                  {selectedEvent.status === "upcoming" ? (
                    <div className="modal-rsvp-box">
                      <h4>{textRsvpTitle}</h4>
                      <p>{textRsvpDesc}</p>

                      <form onSubmit={handleRsvpSubmit}>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label>{textRsvpName}</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                              value={rsvpName}
                              onChange={(e) => setRsvpName(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <label>{textRsvpEmail}</label>
                            <input
                              type="email"
                              className="form-control"
                              required
                              value={rsvpEmail}
                              onChange={(e) => setRsvpEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>{textRsvpPhone}</label>
                          <input
                            type="tel"
                            className="form-control"
                            required
                            value={rsvpPhone}
                            onChange={(e) => setRsvpPhone(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-solid luxury-btn submit-rsvp-btn"
                          disabled={isSubmitting}>
                          {isSubmitting ? textRsvpSubmitting : textRsvpSubmit}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div
                      className="alert alert-secondary text-center p-3 font-weight-bold"
                      style={{ borderRadius: "12px" }}>
                      {isRTL
                        ? "هذه الفعالية انتهت بالفعل. تابعنا لمزيد من الفعاليات القادمة."
                        : "This event has already concluded. Stay tuned for upcoming highlights!"}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </CommonLayout>
  );
};

export default EventsPage;
