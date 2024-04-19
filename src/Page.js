import React, { useState } from "react";
import blueLogo from "./assets/blueLogo.png";
import whiteLogo from "./assets/whiteLogo.png";
import Map from "./assets/Map.png";
import MapMobile from "./assets/map_mobile.png";
import Icon from "./assets/googleMapIcon.png";
import rect1 from "./assets/Rectangle1.png";
import rect2 from "./assets/Rectangle2.png";
import rect3 from "./assets/Rectangle3.png";
import rect4 from "./assets/Rectangle4.png";
import rect5 from "./assets/Rectangle5.png";
import rect6 from "./assets/Rectangle6.png";
import "./Page.css";


function Navbar(){
    return <div className="nav" >
        <img className="nav-logo" src={blueLogo} alt="Blue Logo"></img>
    </div>;
}

 function Input(props) {
    return <input className={props.className} onChange = {props.onChange} type= 'text' placeholder= {props.placeholder}   >
        </input>;
}

function Form(){

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasError, setHasErorr] = useState(false);
    const [responses, setResponses] = useState({});
    const [timer,setTimer] = useState(5);

    const response = {
        name: "",
        orgName: "",
        email: "",
        contact: "",
        message: ""
    }


    const onChangeName = (e) => {
        let value = e.target.value;
        if(value.length !== 0){
            response.name = value;   
        }
    }
    const onChangeOrgName = (e) => {
        let value = e.target.value;
        if(value.length !== 0){
            response.orgName = value;    
        }
    }
    const onChangeMessage = (e) => {
        let value = e.target.value;
        if(value.length !== 0){
            response.message = value;      
        }
    }

    const onChangeEmail = (e) => {
        let value = e.target.value;
        if(value.includes("@")){
            response.email = value;
        }
    }

    const onChangeContact =(e) => {
        let value = e.target.value
        if(value.length >= 10){
            response.contact = value;
        }
    }

    const onSubmit = () => {

        console.log(`name:${response.name.length} \n org:${response.orgName.length} \n email:${response.email.length} \n contact:${response.contact.length} \n msg:${response.message.length}`);

        if(response.name === "" || response.orgName === "" || response.email === "" || response.contact === "" || response.message === "")  {
            setHasErorr(true);
        }
        else{
            setResponses(response);
            console.log(responses.name);
        }

        setIsSubmitted(true);
        setTimeout( function (){ window.location.reload(); }, 5000);
    }

   if(isSubmitted){

        const counter = () => {
            setTimeout(function (){
                if(timer > 0){
                    let t = timer;
                    t--;
                    setTimer( t );
                }
            },1000);
            return timer;
        }
        if(!hasError){
            let status = document.getElementById("submit-status");
            status.innerHTML = `Application for E-mail: ${responses.email} Submitted Successfully. </br> Refreshing in ${counter()}`;
            status.style.color = "green";
        } else {
            let status = document.getElementById("submit-status");
            status.innerHTML = `Error: Empty or Incorrect Details.Please try again. </br> Refreshing in ${counter()}`;
            status.style.color = "red";
        }
   }

        return <div className="formcard">
                <div className="formcard-text">
                    <span className="boldtext">
                        <span>Got any Questions?</span>
                    </span>
                    <span className="lighttext">
                        <span>Lets discuss it over a cup of coffee.</span>
                    </span>
                </div>
                <div className="form-mainform">
                    <div className="form-row-1">
                        <Input className= "form-input" onChange={onChangeName} placeholder= "Name"/>
                        <Input className= "form-input" onChange={onChangeOrgName} placeholder= "Organisation Name"/>    
                    </div>
                    <div className="form-row-2">
                        <Input className= "form-input" onChange={onChangeEmail} placeholder= "Email ID"/>
                        <Input className= "form-input" onChange={onChangeContact} placeholder= "Contact Number"/>    
                    </div>
                    <div className= "form-row-3">
                        <textarea className = "form-msg-input" onChange={onChangeMessage} placeholder= "Message"></textarea>  
                            <button onClick={onSubmit} className="form-btn">
                                Submit <span>→</span>
                            </button>
                    </div>
                    <p id="submit-status"></p>
                </div>
        </div>;
    
    
    
}



function MapCard(){

    const mapCardStyle = {
        '@media (max-width: 415px)': {
            backgroundImage: `url(${MapMobile})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "411px",
            height: "638px",
            display: "flex",
            position: "relative",
            alignItems: "flex-start",
            flexShrink: "0",
        },
        backgroundImage: `url(${Map})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "638px",
        textAllign: "start",
        overflowX: "hidden"
    }

    return <div className= "map-card" style = {mapCardStyle}>
        <div className="info-card">
            <h2>
                OnestopNDT
            </h2>
            <p>
                PAP/R/406 Rabale MIDC Near Dol Electric <br/> 
                Company Rabale MIDC, Navi Mumbai - 400701.
            </p>
            <br />
            <p>
                Landline - 022 4131 0099
            </p>
            <div className="map-link"> 
                <p><img src={Icon} alt="Maps Icon"></img>Google Map Link</p>
            </div>
        </div>
    </div>;
}

function ShowcaseImage(props){

    return <div className="showcase-image">
        <img src = {props.bg} alt={props.label} className="inner-image"></img>
        <span className="image-label">{props.label}</span>
    </div>
}

function Showcase(){
    return <div className="showcase">
        <div className="showcase-row">
            <ShowcaseImage label="Companies" bg={rect1}/>
            <ShowcaseImage label="Jobs" bg={rect2}/>
        </div >
        <div className="showcase-row">
            <ShowcaseImage label="Articles" bg={rect3}/>
            <ShowcaseImage label="Webinars" bg={rect4}/>
        </div>
        <div className="showcase-row">
            <ShowcaseImage label="Forums" bg={rect5}/>
            <ShowcaseImage label="Application Notes" bg={rect6}/>
        </div>
        
        
    </div>
}

function Footer(){
    return <footer>
        <div className="footer">
            <div className="footer-logo">
                <img src={whiteLogo} alt= "Logo"></img>
            </div>
            <hr/>
            <p>What is One Stop NDT</p>
        </div>
    </footer>
}

//behaviour

function Page(){
    return <div className="page">
            <header>
            <Navbar />
            </header>   
            <div className="formbody">
                <Form />
            </div>
            <MapCard />
            <Showcase/>
            <Footer />
        </div>;

}

export default Page;