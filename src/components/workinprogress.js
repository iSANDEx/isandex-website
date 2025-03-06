import Card from './card';
import { Link } from 'react-router-dom';

const title = <img src="./404.png" height="200" alt='iSANDEx Logo'></img>


const body = <>
    <Link replace to="mailto:info@isandex.com" className="btn btn-success" >Contact Us</Link>
    </>

function WIP() {
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="We're redesigning this space"
            title={title}
            text="Coming soon!!"
            body = {body}
         />
    );
}

export default WIP;

