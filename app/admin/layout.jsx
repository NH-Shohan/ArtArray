function DashboardLayout({ children }) {
  return (
    <>
      {children}
      <div className="col-span-9 border border-light rounded-xl h-[calc(100vh-140px)] w-full">
        Content
      </div>
    </>
  );
}

export default DashboardLayout;
