export function EmailSidebar() {
    return (
      <>
        {/* Desktop sidebar */}
        <div className="fixed right-10 bottom-0 hidden lg:block">
          <div className="flex flex-col items-center space-y-6">
            
            <a
              href="mailto:chetan.indulkar007@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors vertical-text hover:-translate-y-1 transform "
            >
              chetan.indulkar007@gmail.com
            </a>
            <div className="w-px h-24 bg-gray-400 dark:bg-gray-600 mt-6"></div>
          </div>
        </div>
  
        {/* Mobile email (hidden if social footer is visible) */}
        <div className="lg:hidden text-center py-4">
          <a
            href="mailto:chetan.indulkar007@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
          >
            chetan.indulkar007@gmail.com
          </a>
        </div>
      </>
    )
  }
  
  