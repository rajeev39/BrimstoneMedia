export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Brimstone media. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-600">Twitter</a>
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
