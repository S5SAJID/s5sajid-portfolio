export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 overflow-hidden">
        <div className="flex gap-10 py-8 justify-between md:py-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div className="text-sm text-muted-foreground">
              © S5SAJID - All rights reserved.
            </div>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">S5SAJID</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-muted-foreground transition hover:text-foreground"
                  href="/#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground transition hover:text-foreground"
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground transition hover:text-foreground"
                  href="/#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground transition hover:text-foreground"
                  href="/#skills"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1 items-center">
              <li>
                <a
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  aria-label="Instagram"
                  href="https://www.instagram.com/al._quran_urdu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram "
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  aria-label="Youtube"
                  href="https://youtube.com/@alquranurduyt"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-youtube "
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  aria-label="Facebbok"
                  href="https://www.facebook.com/profile.php?id=61559890619310&amp;mibextid=ZbWKwL"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook "
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-primary transition hover:text-blue-600"
                  aria-label="Whatsapp"
                  href="https://wa.me/923430063414?text=Hello,%20S5SAJID%20i%20want%20to%20talk%20with%20you!"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-message-circle "
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="relative -mt-16 h-60 overflow-hidden w-full"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-background before:to-background/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['S5SAJID'] after:absolute after:inset-0 after:bg-background/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['S5SAJID'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-primary blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
