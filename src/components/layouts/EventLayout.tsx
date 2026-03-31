import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode
}

const EventLayout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    {children}
    <Footer />
  </div>
)

export default EventLayout
