const NavItem = props => <div>{props.text}</div>

const Nav = () =>
<nav className="p-1 px-1 bg-green">
    <div className="text-center text-lg text-white font-montSerratMedium">
      <a href="#" className="block lg:inline-block mr-3">
        <NavItem text="AGENDE UMA REUNIÃO" />
      </a>
      <a href="#" className="block lg:inline-block mr-3">
        <NavItem text="DIFERENCIAS" />
      </a>
      <a href="#" className="block lg:inline-block mr-3">
        <NavItem text="SOBRE O SISTEMA" />
      </a>
      <a href="#" className="block lg:inline-block mr-3">
        <NavItem text="SOBRE O SISTEMA" />
      </a>
      <a href="#" className="block lg:inline-block mr-3">
        <NavItem text="CONTATO" />
      </a>
  </div>
</nav>

export default Nav