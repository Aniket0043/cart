import React from 'react';
const NavBar =(props)=> {
        return (
            <div>
            <div className="nav" style={styles.nav}>
            <div className="img">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1614420782~hmac=bd29c0e52d78aa071b613fa23df28fe2"
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
    },
    comp: {
        position: 'absolute',
        borderRadius:"50%",
        padding:"4px 8px",
        right: -5,
         top: -7,
        backgroundColor: 'yellow'
    }
}
export default NavBar