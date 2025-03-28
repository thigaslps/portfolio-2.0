export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex items-center justify-center mb-[1rem]">
          <div className="flex flex-col items-center text-subtitleColor">
            <span className="text-sm sm:text-base">
              Design inspired by{" "}
              <a
                href="https://www.me.toinfinite.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Tajmirul
              </a>{" "}
              portfolio.
            </span>
            <span className="text-sm sm:text-base">© 2025 Thiago</span>
          </div>
        </div>
      </footer>
    </>
  );
}
