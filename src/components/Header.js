import React from 'react'; 
import {Container, Nav, Navbar, Button, ButtonGroup} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
  
function Header({callBack, displayType}) {
    const lngs = {
        en: { nativeName: 'EN',
              code: 'GB UK',
              flagName: 'flag flag-united-kingdom'
         },
        sp: { nativeName: 'ES',
              code: 'CL',
              flagName: 'flag flag-chile'
        }
      };
    const { t, i18n} = useTranslation(['translation']);
    
    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" fixed="top" >
            <Container>
            <Navbar.Brand href="#">
                <img src={process.env.PUBLIC_URL + "/isandex_icon.png"} height="32px" alt="iSANDEx" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="ms-auto" defaultActiveKey="#" >
                    {/* <Nav.Link href="#services"> {t("headers.services", 'serv')} </Nav.Link>
                    <Nav.Link href="#portfolio">{t('headers.portfolio', 'pfolio')}</Nav.Link>
                    <Nav.Link href="#about">{t('headers.about', 'abut')}</Nav.Link>
                    <Nav.Link href="#contact">{t('headers.contact', 'email')}</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Container>
            {/* <ButtonGroup aria-label="Language Selector">
                {Object.keys(lngs).map((lng) => (
                    <Button key={lng} 
                            variant={i18n.resolvedLanguage === lng ? 'primary' : 'outline-primary' }                    
                            type="submit" size="sm" onClick={() => i18n.changeLanguage(lng)} >
                            <i className={lngs[lng].flagName}></i>
                            {lngs[lng].nativeName}
                    </Button>
                ))}
            </ButtonGroup> */}
        </Navbar>
);
}

export default Header;