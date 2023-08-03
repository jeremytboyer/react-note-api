function Footer(props) {
    const date = new Date()
    const year = date.getFullYear()
    return (
      <footer className="row justify-between">
        <p>&copy; {year} </p>
        <p>Dev'd and designed by Jerm</p>
      </footer>
    );
  }
  
  export default Footer;