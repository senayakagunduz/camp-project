import React,{useState} from 'react'
import { Container, Menu} from 'semantic-ui-react'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import CartSummary from './CartSummary';
import { useNavigate} from "react-router";


export default function Navi() {
    const [isAuthendicated, setisAuthendicated] = useState(true)
    const navigate=useNavigate()

    function handleSignOut(params) {
        setisAuthendicated(false)
        navigate('/')
        
    }
    function handleSignIn(params) {
        setisAuthendicated(true)
    }
    return (
        <div>
             <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='Home' />
                    <Menu.Item name='Messages' />
                    <Menu.Menu position='right'>
                        <CartSummary/>
                        {isAuthendicated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}     
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    );
}
