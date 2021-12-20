import React from 'react'
import {Dropdown, Menu,Image } from 'semantic-ui-react'


export default function (props) {
    return (
        <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://toppng.com/uploads/preview/cg-user-login-free-login-user-ico-11563177678yeewbjh3ut.png"></Image> 
            <Dropdown pointing="top left" text='Şenay'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut}text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>   
        </div>
    )
}
