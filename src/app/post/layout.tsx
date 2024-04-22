export default function postLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<>
    <div className="h-screen w-dvw bg-orange-200">
        {children}
    </div>
    
    </>)
  }