import "./globals.css"
import { ScrollToTopOnNavigate } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { fontHeading, fontParisienne, fontSans } from "@/lib/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`light ${fontHeading.variable} ${fontSans.variable} ${fontParisienne.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>
          <ScrollToTopOnNavigate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
