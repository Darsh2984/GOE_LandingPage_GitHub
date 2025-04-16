export default function MainLayout({ navbar, children }) {
    return (
      <>
        {navbar}
        {children}
      </>
    )
  }