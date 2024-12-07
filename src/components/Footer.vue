<template>
    <section class="footer">
        <div class="left">
            <div class="logo">
                <h2>Chaikina Entertainment</h2>
            </div>
            <div class="socials">

            </div>
        </div>
        <div class="right">
            <div class="contact-info">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E8E6E3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        <p>chaikina.ent@gmail.com</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E8E6E3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        <p>+971585178400</p>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E8E6E3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        <p>Dubai, UAE</p>
                    </li>
                </ul>
            </div>
            <div class="page-info">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Events</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer {
    // width:100%;
    height:568px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    // padding:155px 164px;
    background-color:#3A372C;
    color:$white;

    ul {
        display: flex;
        flex-direction: column;
        align-items:stretch;
        justify-content:start;
        li {
            display:flex;
            font-size:$body;            
        }
    }

    

    .left {
        width:703px;
        height:232px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: "Libre Baskerville", serif;

        .socials {
            height:42px;
            background-color:grey;
            width:128px;
        }
    }

    .right {
        height:232px;
        // background-color: white;
        width:fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:164px;

        .contact-info {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            height:100%;
            // gap:;
            li {
                // padding: 16px 0;
            }
        }
        .page-info {
            ul  {
                display: flex;
                height:100%;
                flex-direction: column;
                justify-content: space-between;
            }
        } 
    }
}

@media (max-width:800px) {
    .footer {
        height:fit-content;
        padding: 4rem 2px;
        flex-direction: column;
        align-items: center;

        .left {
            width:fit-content;
            .logo h2 {
                font-size:24px;
            }
        }

        .right {
            flex-direction: column;
            align-items:start;
            gap:16px;
        }
    }
}
</style>