import Link from "next/link"
import Footer from "./footer/Footer"
import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="wrap-main">
        <header>
          <div className="container flex items-center justify-between py-6 mx-auto">
            <Link href="/" className="text-2xl font-semibold no-underline">
              Home
            </Link>
            <Link
              href="https://next-drupal.org/docs"
              target="_blank"
              rel="external"
              className="hover:text-blue-600"
            >
              Read the docs
            </Link>
          </div>
        </header>

        <div className="articlesmain">
        <main className="container py-10 mx-auto">{children}</main>
        </div>  
        
       <Footer />
      </div>
    </>
  )
}
