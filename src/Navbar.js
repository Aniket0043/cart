import React from 'react';
const NavBar =(props)=> {
        return (
            <div>
            <div className="nav" style={styles.nav}>
            <div className="img">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1615270273~hmac=4b10b4be455c216586da7f2af52b494d"
                    style={styles.img} />
                    <span className="span" style={styles.comp}>{props.count}
                        </span>
                    </div >

            </div>
            </div>
        )
    }

const styles={
        nav: {
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
        height:50,
        width:"auto",
        backgroundColor: 'gray'
    },
    img: {
        height:30,
        width:30,
        marginRight:20
    },
    comp: {
        position: 'absolute',
        borderRadius:"50%",
        padding:"1px 8px",
        right: 5,
         top: 0,
        backgroundColor: 'yellow'
    }
}
export default NavBar