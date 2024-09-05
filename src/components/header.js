export default function Header() {
    return (
      <header className="flex justify-between items-center py-4 px-8">
        <div className="text-xl font-bold">Frontend Developer</div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-600 hover:text-black">Work</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
            <li><a href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view?usp=sharing"
            target="_blank"
            className="text-gray-600 hover:text-black">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  