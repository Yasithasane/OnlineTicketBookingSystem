import { useEffect, useMemo, useState, type ReactNode } from "react";

type Screen =
  | "splash"
  | "login"
  | "home"
  | "results"
  | "details"
  | "seats"
  | "passengers"
  | "checkout"
  | "confirmation"
  | "trips"
  | "profile";

type IconName =
  | "arrow-left"
  | "arrow-right"
  | "bus"
  | "calendar"
  | "card"
  | "check"
  | "chevron"
  | "clock"
  | "google"
  | "home"
  | "id"
  | "info"
  | "moon"
  | "more"
  | "person"
  | "phone"
  | "search"
  | "seat"
  | "shield"
  | "sparkle"
  | "swap"
  | "train"
  | "trips"
  | "user"
  | "wifi";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Partial<Record<IconName, ReactNode>> = {
    "arrow-left": (
      <>
        <path d="m15 18-6-6 6-6" />
        <path d="M9 12h10" />
      </>
    ),
    "arrow-right": (
      <>
        <path d="m9 18 6-6-6-6" />
        <path d="M5 12h10" />
      </>
    ),
    bus: (
      <>
        <rect x="5" y="3" width="14" height="16" rx="3" />
        <path d="M7 8h10M8 19v2m8-2v2" />
        <circle cx="8.5" cy="15.5" r=".7" fill="currentColor" />
        <circle cx="15.5" cy="15.5" r=".7" fill="currentColor" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18M7 15h3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    google: (
      <>
        <path
          d="M20 12.2c0-.7-.1-1.4-.2-2H12v3.7h4.5a3.9 3.9 0 0 1-1.7 2.5v2.4h2.9c1.7-1.6 2.7-3.8 2.7-6.6Z"
          fill="#4285F4"
          stroke="none"
        />
        <path
          d="M12 20.3c2.4 0 4.5-.8 5.9-2.2L15 15.7c-.8.5-1.8.9-3 .9a5.2 5.2 0 0 1-4.9-3.6h-3v2.5a8.9 8.9 0 0 0 7.9 4.8Z"
          fill="#34A853"
          stroke="none"
        />
        <path
          d="M7.1 13a5.4 5.4 0 0 1 0-3.4V7.1h-3a8.9 8.9 0 0 0 0 8.4L7.1 13Z"
          fill="#FBBC05"
          stroke="none"
        />
        <path
          d="M12 6c1.4 0 2.6.5 3.5 1.4l2.6-2.6A8.8 8.8 0 0 0 4.1 7l3 2.5A5.2 5.2 0 0 1 12 6Z"
          fill="#EA4335"
          stroke="none"
        />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    id: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <circle cx="8.5" cy="11" r="2" />
        <path d="M6 16c.7-1.4 1.5-2 2.5-2s1.8.6 2.5 2m3-5h4m-4 4h3" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6m0-10h.01" />
      </>
    ),
    moon: <path d="M20 15.6A8.5 8.5 0 0 1 8.4 4 8.5 8.5 0 1 0 20 15.6Z" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    phone: (
      <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-1-1.3 3a16 16 0 0 1-9.7-9.7L8 8 7 3Z" />
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    seat: (
      <>
        <path d="M7 11V5a3 3 0 0 1 6 0v6" />
        <path d="M5 9a2 2 0 0 0-2 2v4a4 4 0 0 0 4 4h11v-6a2 2 0 0 0-2-2H7Z" />
        <path d="M7 19v2m11-2v2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkle: (
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm6 11 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    ),
    swap: (
      <>
        <path d="M7 7h11l-3-3m2 13H6l3 3" />
      </>
    ),
    train: (
      <>
        <rect x="6" y="3" width="12" height="15" rx="4" />
        <path d="M8 8h8m-8 7h.01M16 15h.01M8 21l3-3m5 3-3-3" />
      </>
    ),
    trips: (
      <>
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6m-6 4h6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    wifi: (
      <>
        <path d="M5 12.5a10 10 0 0 1 14 0M8 16a6 6 0 0 1 8 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled,
  icon,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  icon?: IconName;
}) {
  return (
    <button className={`button ${variant}`} disabled={disabled} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

function Header({
  title,
  back,
  theme,
  onTheme,
}: {
  title: string;
  back?: () => void;
  theme: boolean;
  onTheme: () => void;
}) {
  return (
    <header className="topbar">
      {back ? (
        <button className="icon-button" onClick={back} aria-label="Go back">
          <Icon name="arrow-left" />
        </button>
      ) : (
        <span className="topbar-spacer" />
      )}
      <h1>{title}</h1>
      <button className="icon-button" onClick={onTheme} aria-label="Toggle theme">
        <Icon name={theme ? "sparkle" : "moon"} />
      </button>
    </header>
  );
}

function BottomNav({ active, go }: { active: string; go: (screen: Screen) => void }) {
  const items: [IconName, string, Screen][] = [
    ["home", "Home", "home"],
    ["search", "Search", "results"],
    ["trips", "Trips", "trips"],
    ["user", "Profile", "profile"],
  ];
  return (
    <nav className="bottom-nav">
      {items.map(([icon, label, screen]) => (
        <button
          key={label}
          className={active === label.toLowerCase() ? "active" : ""}
          onClick={() => go(screen)}
        >
          <Icon name={icon} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function Field({
  label,
  value,
  icon,
  error,
  placeholder,
  onChange,
}: {
  label: string;
  value?: string;
  icon?: IconName;
  error?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className={`field ${error ? "error" : ""}`}>
      <span>{label}</span>
      <div>
        {icon && <Icon name={icon} size={18} />}
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
      {error && <small>{error}</small>}
    </label>
  );
}

const trips = [
  {
    name: "Vande Bharat Express",
    no: "20662",
    from: "06:15 AM",
    to: "02:30 PM",
    duration: "8h 15m",
    seats: "42 seats",
    fare: "₹1,200",
    type: "Train",
  },
  {
    name: "Rajdhani Express",
    no: "22691",
    from: "10:40 AM",
    to: "07:25 PM",
    duration: "8h 45m",
    seats: "18 seats",
    fare: "₹850",
    type: "Train",
  },
  {
    name: "Orange Travels",
    no: "Volvo A/C Sleeper",
    from: "09:45 PM",
    to: "07:15 AM",
    duration: "9h 30m",
    seats: "9 seats",
    fare: "₹1,200",
    type: "Bus",
  },
];

function TripCard({ trip, onClick }: { trip: (typeof trips)[0]; onClick: () => void }) {
  return (
    <article className="trip-card" onClick={onClick}>
      <div className="trip-head">
        <div className="operator-icon">
          <Icon name={trip.type === "Bus" ? "bus" : "train"} size={19} />
        </div>
        <div>
          <strong>{trip.name}</strong>
          <small>{trip.no}</small>
        </div>
        <Icon name="more" size={20} />
      </div>
      <div className="time-row">
        <div>
          <b>{trip.from}</b>
          <small>Hyderabad</small>
        </div>
        <div className="duration">
          <span>{trip.duration}</span>
          <i />
          <small>{trip.type === "Bus" ? "A/C Sleeper" : "Daily"}</small>
        </div>
        <div className="align-right">
          <b>{trip.to}</b>
          <small>Bengaluru</small>
        </div>
      </div>
      <div className="trip-foot">
        <span className="availability">{trip.seats} available</span>
        <div>
          <b>{trip.fare}</b>
          <small> onwards</small>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Select
          </button>
        </div>
      </div>
    </article>
  );
}

function Splash({ go }: { go: (s: Screen) => void }) {
  useEffect(() => {
    const timer = window.setTimeout(() => go("login"), 2000);
    return () => window.clearTimeout(timer);
  }, [go]);
  return (
    <main className="splash">
      <div className="brand-mark">
        <Icon name="train" size={36} />
        <span className="brand-route" />
      </div>
      <div className="splash-copy">
        <h1>
          Go<span>Route</span>
        </h1>
        <p>Travel smarter</p>
      </div>
      <Button onClick={() => go("login")} icon="arrow-right">
        Get Started
      </Button>
      <small>Your journey, beautifully simple.</small>
    </main>
  );
}

function Login({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  return (
    <main className="screen login-screen">
      <Header title="" theme={dark} onTheme={toggle} />
      <div className="login-art">
        <div className="mini-brand">
          <Icon name="train" size={27} />
        </div>
        <h1>Welcome aboard</h1>
        <p>Book trains and buses, all in one place.</p>
      </div>
      <div className="login-form">
        <Field label="Email address" placeholder="you@example.com" icon="person" />
        <Field label="Phone number" placeholder="+91 98765 43210" icon="phone" />
        {sent && (
          <Field
            label="Enter 6-digit OTP"
            value={otp}
            onChange={setOtp}
            placeholder="• • • • • •"
            icon="shield"
          />
        )}
        <Button onClick={() => (sent ? go("home") : setSent(true))}>
          {sent ? "Verify & Continue" : "Send OTP"}
        </Button>
        {sent && <button className="text-action">Resend OTP in 00:28</button>}
        <div className="divider">
          <span>or continue with</span>
        </div>
        <Button variant="outline" onClick={() => go("home")}>
          <Icon name="google" />
          Continue with Google
        </Button>
        <p className="legal">
          By continuing, you agree to our <u>Terms</u> and <u>Privacy Policy</u>.
        </p>
      </div>
    </main>
  );
}

function Home({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [mode, setMode] = useState<"Train" | "Bus">("Train");
  return (
    <main className="screen has-nav">
      <div className="home-head">
        <div>
          <small>Good morning,</small>
          <h1>Where are you going?</h1>
        </div>
        <button className="avatar" onClick={() => go("profile")}>
          AK
        </button>
      </div>
      <section className="search-box">
        <div className="segment">
          <button className={mode === "Train" ? "active" : ""} onClick={() => setMode("Train")}>
            <Icon name="train" />
            Train
          </button>
          <button className={mode === "Bus" ? "active" : ""} onClick={() => setMode("Bus")}>
            <Icon name="bus" />
            Bus
          </button>
        </div>
        <div className="stations">
          <div>
            <span className="dot" />
            <p>
              <small>FROM</small>
              <b>Secunderabad Junction</b>
              <span>Hyderabad, Telangana</span>
            </p>
          </div>
          <div>
            <span className="pin" />
            <p>
              <small>TO</small>
              <b>KSR Bengaluru City</b>
              <span>Bengaluru, Karnataka</span>
            </p>
          </div>
          <button className="swap">
            <Icon name="swap" />
          </button>
        </div>
        <button className="date-row">
          <span>
            <Icon name="calendar" />
          </span>
          <p>
            <small>DATE OF JOURNEY</small>
            <b>Sat, 28 June</b>
          </p>
          <em>Tomorrow</em>
        </button>
        <Button onClick={() => go("results")} icon="search">
          Search {mode}s
        </Button>
      </section>
      <section className="section">
        <div className="section-title">
          <h2>Recent searches</h2>
          <button>Clear</button>
        </div>
        <button className="recent" onClick={() => go("results")}>
          <span>
            <Icon name="clock" />
          </span>
          <div>
            <b>
              Hyderabad <Icon name="arrow-right" size={14} /> Bengaluru
            </b>
            <small>28 Jun · Train</small>
          </div>
          <Icon name="chevron" />
        </button>
      </section>
      <section className="section offers">
        <div className="section-title">
          <h2>Offers for you</h2>
          <button>View all</button>
        </div>
        <div className="offer-card">
          <div>
            <span>WEEKEND SPECIAL</span>
            <h3>Flat ₹250 off</h3>
            <p>On your first bus booking</p>
            <button>
              Use code: <b>GOROUTE250</b>
            </button>
          </div>
          <div className="offer-visual">
            <Icon name="bus" size={43} />
          </div>
        </div>
        <div className="dots">
          <i className="active" />
          <i />
          <i />
        </div>
      </section>
      <BottomNav active="home" go={go} />
    </main>
  );
}

function Results({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [filter, setFilter] = useState("Recommended");
  return (
    <main className="screen has-nav">
      <Header
        title="Hyderabad to Bengaluru"
        back={() => go("home")}
        theme={dark}
        onTheme={toggle}
      />
      <div className="route-summary">
        <button>
          <Icon name="arrow-left" />
        </button>
        <div>
          <b>HYD</b>
          <span>Sat, 28 Jun · 1 Traveller</span>
        </div>
        <Icon name="arrow-right" />
        <div className="align-right">
          <b>BLR</b>
          <span>8 trains found</span>
        </div>
      </div>
      <div className="chips">
        {["Recommended", "Departure", "Fare", "AC / Non-AC"].map((x) => (
          <button key={x} className={filter === x ? "selected" : ""} onClick={() => setFilter(x)}>
            {x}
            {x === "Departure" && <Icon name="chevron" size={13} />}
          </button>
        ))}
      </div>
      <div className="results-head">
        <b>Available trips</b>
        <span>Sorted by {filter}</span>
      </div>
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.name} trip={trip} onClick={() => go("details")} />
        ))}
      </div>
      <BottomNav active="search" go={go} />
    </main>
  );
}

function Details({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const stops = [
    ["06:15 AM", "Secunderabad Junction", "Day 1"],
    ["10:05 AM", "Kurnool City", "10 min"],
    ["02:30 PM", "KSR Bengaluru City", "Day 1"],
  ];
  return (
    <main className="screen with-sticky">
      <Header title="Trip details" back={() => go("results")} theme={dark} onTheme={toggle} />
      <section className="detail-hero">
        <div className="operator-icon">
          <Icon name="train" />
        </div>
        <div>
          <h2>Vande Bharat Express</h2>
          <p>20662 · Runs daily</p>
        </div>
        <span className="rating">★ 4.7</span>
      </section>
      <section className="route-card">
        <div className="detail-times">
          <div>
            <b>06:15 AM</b>
            <span>28 Jun</span>
          </div>
          <div>
            <small>8h 15m</small>
            <i />
            <span>485 km</span>
          </div>
          <div className="align-right">
            <b>02:30 PM</b>
            <span>28 Jun</span>
          </div>
        </div>
        <div className="detail-stations">
          <b>Secunderabad Jn</b>
          <b>KSR Bengaluru City</b>
        </div>
      </section>
      <section className="section plain">
        <h2>Route & stops</h2>
        <div className="timeline">
          {stops.map((s, i) => (
            <div key={s[1]}>
              <span className={i === 0 || i === 2 ? "major" : ""} />
              <b>{s[0]}</b>
              <p>
                <strong>{s[1]}</strong>
                <small>{s[2]}</small>
              </p>
            </div>
          ))}
        </div>
        <button className="view-all">
          View all 7 stops <Icon name="chevron" size={16} />
        </button>
      </section>
      <section className="section plain">
        <h2>Class & amenities</h2>
        <div className="class-row">
          <button className="class-card selected">
            <b>3A</b>
            <span>AC 3 Tier</span>
            <strong>₹1,200</strong>
            <small>42 available</small>
          </button>
          <button className="class-card">
            <b>2A</b>
            <span>AC 2 Tier</span>
            <strong>₹1,850</strong>
            <small>18 available</small>
          </button>
        </div>
        <div className="amenities">
          <span>
            <Icon name="wifi" />
            Wi-Fi
          </span>
          <span>
            <Icon name="seat" />
            Charging
          </span>
          <span>
            <Icon name="shield" />
            CCTV
          </span>
        </div>
      </section>
      <div className="sticky-bar">
        <div>
          <small>Total fare</small>
          <b>₹1,200</b>
          <span>per traveller</span>
        </div>
        <Button onClick={() => go("seats")}>Select Seats</Button>
      </div>
    </main>
  );
}

const seatRows = [
  ["1A", "1B", "1C", "1D"],
  ["2A", "2B", "2C", "2D"],
  ["3A", "3B", "3C", "3D"],
  ["4A", "4B", "4C", "4D"],
  ["5A", "5B", "5C", "5D"],
  ["6A", "6B", "6C", "6D"],
];
const booked = new Set(["1B", "2C", "4A", "4B", "5D"]);

function Seats({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [selected, setSelected] = useState<string[]>(["3A"]);
  const toggleSeat = (seat: string) => {
    if (!booked.has(seat))
      setSelected((v) => (v.includes(seat) ? v.filter((s) => s !== seat) : [...v, seat]));
  };
  return (
    <main className="screen with-sticky">
      <Header title="Select seats" back={() => go("details")} theme={dark} onTheme={toggle} />
      <div className="coach-head">
        <div>
          <b>Coach B2</b>
          <span>AC 3 Tier</span>
        </div>
        <button>
          Change <Icon name="chevron" size={14} />
        </button>
      </div>
      <div className="legend">
        <span>
          <i className="available" />
          Available
        </span>
        <span>
          <i className="selected" />
          Selected
        </span>
        <span>
          <i className="booked" />
          Booked
        </span>
      </div>
      <section className="seat-shell">
        <div className="driver">
          <Icon name="train" size={20} />
          <span>Direction of travel</span>
          <Icon name="arrow-right" size={16} />
        </div>
        <div className="seat-labels">
          <span>Window</span>
          <span>Aisle</span>
          <span>Aisle</span>
          <span>Window</span>
        </div>
        <div className="seat-map">
          {seatRows.map((row, i) => (
            <div className="seat-row" key={i}>
              <small>{i + 1}</small>
              {row.map((seat, j) => (
                <button
                  key={seat}
                  disabled={booked.has(seat)}
                  className={`${selected.includes(seat) ? "selected" : ""} ${booked.has(seat) ? "booked" : ""} ${j === 2 ? "aisle" : ""}`}
                  onClick={() => toggleSeat(seat)}
                >
                  <Icon name="seat" size={19} />
                  <span>{seat}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="coach-end">B2 · AC 3 Tier Coach</div>
      </section>
      <div className="help-note">
        <Icon name="info" />
        <p>
          <b>Free cancellation</b>
          <span>Cancel up to 4 hours before departure</span>
        </p>
      </div>
      <div className="sticky-bar">
        <div>
          <small>
            {selected.length} seat{selected.length !== 1 ? "s" : ""} selected
          </small>
          <b>₹{(selected.length * 1200).toLocaleString("en-IN")}</b>
          <span>{selected.join(", ") || "Choose a seat"}</span>
        </div>
        <Button disabled={!selected.length} onClick={() => go("passengers")}>
          Proceed
        </Button>
      </div>
    </main>
  );
}

function Passengers({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [count, setCount] = useState(1);
  return (
    <main className="screen with-sticky">
      <Header title="Passenger details" back={() => go("seats")} theme={dark} onTheme={toggle} />
      <div className="stepper">
        <span className="done">1</span>
        <i className="done" />
        <span className="active">2</span>
        <i />
        <span>3</span>
        <div>
          <small>Seats</small>
          <small>Passengers</small>
          <small>Payment</small>
        </div>
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <section className="passenger-card" key={i}>
          <div className="card-title">
            <span>
              <Icon name="person" />
              Passenger {i + 1}
            </span>
            {i > 0 && <button onClick={() => setCount(count - 1)}>Remove</button>}
          </div>
          <Field label="Full name" placeholder="As per ID proof" />
          <div className="field-grid">
            <Field label="Age" placeholder="Age" />
            <label className="field">
              <span>Gender</span>
              <div>
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
            </label>
          </div>
          <label className="field">
            <span>ID proof type</span>
            <div>
              <Icon name="id" size={18} />
              <select>
                <option>Aadhaar Card</option>
                <option>Passport</option>
                <option>Driving Licence</option>
              </select>
            </div>
          </label>
        </section>
      ))}
      <button className="add-passenger" onClick={() => setCount(Math.min(4, count + 1))}>
        + Add another passenger
      </button>
      <section className="contact-card">
        <h2>Contact details</h2>
        <p>Your ticket and updates will be sent here.</p>
        <Field label="Email address" placeholder="you@example.com" icon="person" />
        <Field label="Mobile number" placeholder="+91 98765 43210" icon="phone" />
      </section>
      <div className="sticky-bar">
        <div>
          <small>
            {count} passenger{count > 1 ? "s" : ""}
          </small>
          <b>₹{(count * 1200).toLocaleString("en-IN")}</b>
          <span>incl. all taxes</span>
        </div>
        <Button onClick={() => go("checkout")}>Continue</Button>
      </div>
    </main>
  );
}

function Checkout({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [payment, setPayment] = useState("UPI");
  const [coupon, setCoupon] = useState(false);
  return (
    <main className="screen with-sticky">
      <Header title="Review & pay" back={() => go("passengers")} theme={dark} onTheme={toggle} />
      <section className="summary-card">
        <div>
          <span>HYD</span>
          <Icon name="train" />
          <i />
          <Icon name="arrow-right" />
          <b>BLR</b>
        </div>
        <h2>Vande Bharat Express</h2>
        <p>Sat, 28 Jun · 06:15 AM · Coach B2</p>
        <div className="ticket-tag">
          <Icon name="seat" size={17} /> 1 traveller · Seat 3A
        </div>
      </section>
      <section className="coupon-card">
        <div className="coupon-input">
          <Icon name="sparkle" />
          <input placeholder="Enter coupon code" defaultValue="GOROUTE250" />
          <button onClick={() => setCoupon(true)}>{coupon ? "Applied" : "Apply"}</button>
        </div>
        {coupon && (
          <p>
            <Icon name="check" size={15} /> Coupon applied! You saved ₹250.
          </p>
        )}
      </section>
      <section className="fare-card">
        <h2>Fare breakdown</h2>
        <div>
          <span>Base fare</span>
          <b>₹1,200</b>
        </div>
        <div>
          <span>Taxes</span>
          <b>₹60</b>
        </div>
        <div>
          <span>Convenience fee</span>
          <b>₹29</b>
        </div>
        {coupon && (
          <div className="discount">
            <span>Coupon discount</span>
            <b>− ₹250</b>
          </div>
        )}
        <div className="total">
          <span>Total amount</span>
          <b>₹{coupon ? "1,039" : "1,289"}</b>
        </div>
      </section>
      <section className="payment-card">
        <h2>Choose payment method</h2>
        {[
          ["UPI", "phone", "Google Pay, PhonePe, Paytm"],
          ["Credit / Debit Card", "card", "Visa, Mastercard, RuPay"],
          ["Net Banking", "shield", "All major banks"],
        ].map(([name, icon, sub]) => (
          <button
            key={name}
            className={payment === name ? "selected" : ""}
            onClick={() => setPayment(name)}
          >
            <span className="pay-icon">
              <Icon name={icon as IconName} />
            </span>
            <p>
              <b>{name}</b>
              <small>{sub}</small>
            </p>
            <i />
          </button>
        ))}
      </section>
      <div className="secure">
        <Icon name="shield" size={17} />
        Payments are secure and encrypted
      </div>
      <div className="sticky-bar pay">
        <div>
          <small>Total to pay</small>
          <b>₹{coupon ? "1,039" : "1,289"}</b>
          <span>View details</span>
        </div>
        <Button onClick={() => go("confirmation")}>Pay ₹{coupon ? "1,039" : "1,289"}</Button>
      </div>
    </main>
  );
}

function QRCode() {
  return (
    <div className="qr" aria-label="QR code">
      {Array.from({ length: 81 }).map((_, i) => (
        <i
          key={i}
          className={
            (i * 7 + (i % 4)) % 5 < 2 || [0, 1, 7, 8, 9, 17, 63, 64, 72, 73, 79, 80].includes(i)
              ? "on"
              : ""
          }
        />
      ))}
    </div>
  );
}

function Confirmation({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  return (
    <main className="screen confirmation">
      <Header title="Booking confirmed" theme={dark} onTheme={toggle} />
      <div className="success">
        <span>
          <Icon name="check" size={35} />
        </span>
        <h1>You're all set!</h1>
        <p>Your journey has been booked successfully.</p>
      </div>
      <section className="ticket">
        <div className="ticket-top">
          <div>
            <small>PNR NUMBER</small>
            <b>4829136580</b>
          </div>
          <span>CONFIRMED</span>
        </div>
        <div className="ticket-brand">
          <div className="operator-icon">
            <Icon name="train" />
          </div>
          <div>
            <b>Vande Bharat Express</b>
            <span>20662 · AC 3 Tier</span>
          </div>
        </div>
        <div className="ticket-route">
          <div>
            <b>06:15</b>
            <strong>HYD</strong>
            <small>Secunderabad Jn</small>
          </div>
          <div>
            <span>8h 15m</span>
            <i />
            <Icon name="train" size={17} />
            <em>Sat, 28 Jun</em>
          </div>
          <div className="align-right">
            <b>14:30</b>
            <strong>BLR</strong>
            <small>KSR Bengaluru City</small>
          </div>
        </div>
        <div className="ticket-info">
          <div>
            <small>PASSENGER</small>
            <b>Arjun Kumar</b>
          </div>
          <div>
            <small>COACH</small>
            <b>B2</b>
          </div>
          <div>
            <small>SEAT</small>
            <b>3A</b>
          </div>
        </div>
        <div className="tear">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="qr-wrap">
          <QRCode />
          <p>
            <b>Scan at the station</b>
            <span>Keep this QR code handy</span>
          </p>
        </div>
      </section>
      <div className="confirmation-actions">
        <Button variant="outline" icon="calendar">
          Add to Calendar
        </Button>
        <Button onClick={() => go("home")}>Back to Home</Button>
      </div>
    </main>
  );
}

function Trips({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  const [tab, setTab] = useState("Upcoming");
  const data =
    tab === "Upcoming"
      ? [
          {
            status: "Confirmed",
            route: "Hyderabad to Bengaluru",
            date: "Sat, 28 Jun",
            op: "Vande Bharat Express",
            time: "06:15 AM",
            seat: "B2 · 3A",
          },
        ]
      : [
          {
            status: "Completed",
            route: "Mumbai to Pune",
            date: "12 May 2025",
            op: "Shatabdi Express",
            time: "10:40 AM",
            seat: "C1 · 18",
          },
          {
            status: "Cancelled",
            route: "Chennai to Madurai",
            date: "03 Apr 2025",
            op: "APSRTC Garuda Plus",
            time: "09:45 PM",
            seat: "U4",
          },
        ];
  return (
    <main className="screen has-nav">
      <Header title="My trips" theme={dark} onTheme={toggle} />
      <div className="tabs">
        <button className={tab === "Upcoming" ? "active" : ""} onClick={() => setTab("Upcoming")}>
          Upcoming
        </button>
        <button className={tab === "Past" ? "active" : ""} onClick={() => setTab("Past")}>
          Past
        </button>
      </div>
      <div className="ticket-list">
        {data.map((t, i) => (
          <article className="my-ticket" key={t.route}>
            <div className="my-ticket-head">
              <span className={`status ${t.status.toLowerCase()}`}>{t.status}</span>
              <small>{t.date}</small>
            </div>
            <h2>{t.route}</h2>
            <div className="my-op">
              <span>
                <Icon name={i === 1 ? "bus" : "train"} />
              </span>
              <p>
                <b>{t.op}</b>
                <small>
                  {t.time} · {t.seat}
                </small>
              </p>
              <Icon name="chevron" />
            </div>
            <div className="my-ticket-foot">
              <button onClick={() => go("confirmation")}>View ticket</button>
              {tab === "Upcoming" && <button className="cancel">Cancel ticket</button>}
            </div>
          </article>
        ))}
      </div>
      {tab === "Upcoming" && (
        <div className="trip-promo">
          <Icon name="sparkle" size={28} />
          <div>
            <b>Planning another trip?</b>
            <span>Find the best fares in seconds.</span>
          </div>
          <button onClick={() => go("home")}>Search</button>
        </div>
      )}
      <BottomNav active="trips" go={go} />
    </main>
  );
}

function Profile({
  go,
  dark,
  toggle,
}: {
  go: (s: Screen) => void;
  dark: boolean;
  toggle: () => void;
}) {
  return (
    <main className="screen has-nav">
      <Header title="Profile & settings" theme={dark} onTheme={toggle} />
      <section className="profile-head">
        <div className="profile-avatar">
          AK
          <span>
            <Icon name="check" size={11} />
          </span>
        </div>
        <h1>Arjun Kumar</h1>
        <p>arjun.kumar@email.com</p>
        <small>+91 98765 43210</small>
        <button>Edit profile</button>
      </section>
      <section className="settings-group">
        <h3>TRAVEL PREFERENCES</h3>
        <button>
          <span className="setting-icon">
            <Icon name="person" />
          </span>
          <p>
            <b>Saved passengers</b>
            <small>2 passengers</small>
          </p>
          <Icon name="chevron" />
        </button>
        <button>
          <span className="setting-icon">
            <Icon name="card" />
          </span>
          <p>
            <b>Payment methods</b>
            <small>1 saved card</small>
          </p>
          <Icon name="chevron" />
        </button>
      </section>
      <section className="settings-group">
        <h3>APP SETTINGS</h3>
        <button onClick={toggle}>
          <span className="setting-icon">
            <Icon name="moon" />
          </span>
          <p>
            <b>Dark mode</b>
            <small>{dark ? "On" : "Off"}</small>
          </p>
          <i className={`switch ${dark ? "on" : ""}`}>
            <span />
          </i>
        </button>
        <button>
          <span className="setting-icon">
            <Icon name="info" />
          </span>
          <p>
            <b>Help & support</b>
            <small>FAQs and contact</small>
          </p>
          <Icon name="chevron" />
        </button>
        <button>
          <span className="setting-icon">
            <Icon name="shield" />
          </span>
          <p>
            <b>Privacy & security</b>
            <small>Manage your data</small>
          </p>
          <Icon name="chevron" />
        </button>
      </section>
      <button className="logout" onClick={() => go("login")}>
        Logout
      </button>
      <p className="version">GoRoute v1.0.0</p>
      <BottomNav active="profile" go={go} />
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [dark, setDark] = useState(false);
  const [history, setHistory] = useState<Screen[]>([]);
  const go = (next: Screen) => {
    setHistory((h) => [...h, screen]);
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    const next = history.at(-1) || "home";
    setHistory((h) => h.slice(0, -1));
    setScreen(next);
    window.scrollTo(0, 0);
  };
  const props = useMemo(
    () => ({ go, dark, toggle: () => setDark((v) => !v) }),
    [dark, screen, history],
  );
  let page: ReactNode;
  switch (screen) {
    case "splash":
      page = <Splash go={go} />;
      break;
    case "login":
      page = <Login {...props} />;
      break;
    case "home":
      page = <Home {...props} />;
      break;
    case "results":
      page = <Results {...props} />;
      break;
    case "details":
      page = <Details {...props} go={(s) => (s === "results" ? back() : go(s))} />;
      break;
    case "seats":
      page = <Seats {...props} go={(s) => (s === "details" ? back() : go(s))} />;
      break;
    case "passengers":
      page = <Passengers {...props} go={(s) => (s === "seats" ? back() : go(s))} />;
      break;
    case "checkout":
      page = <Checkout {...props} go={(s) => (s === "passengers" ? back() : go(s))} />;
      break;
    case "confirmation":
      page = <Confirmation {...props} />;
      break;
    case "trips":
      page = <Trips {...props} />;
      break;
    case "profile":
      page = <Profile {...props} />;
      break;
  }
  return <div className={dark ? "app dark" : "app"}>{page}</div>;
}
