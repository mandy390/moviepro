import "./App.css";
import PaperCloud from "./images/PaperCloud.gif";
import Appstore from "./images/appstore.svg";
import Playstore from "./images/playstore.svg";
import Search from "./images/Search.gif";
import Ipad from "./images/iPad.png";
import Iphone from "./images/iPhone.png";
import Laptop from "./images/Laptop.png";

const First = () => {
    return ( 
    <div className="First">
            <div className="first-div">
                <div className="personal">
                <h1>Your Personal <span>Business</span> Manager</h1>
                <h2> That saves you hours of tedious paper work.</h2>
                <p>
                    Whether you're a Creator, a Freelancer, or a Business owner
                    PaperCloud makes it super easy to close deals 2x faster, 
                    either from our phone, iPad or computer.
                </p>
                <p>
                    With a simple, and straight forward user interface.
                    You can create beautiful Invoices in seconds, organise your 
                    customers data in one place, automatically track your income,
                    inventory, expenses, and profits on the go.
                </p>
                    <div className="appst">
                        <img  src={Appstore} alt="Appstore" />
                        <img  src={Playstore} alt="Appstore" />
                    </div>
                </div>

                <div className="paper">
                    <img className='PaperCloud' src={PaperCloud} alt="Papercloud" />
                </div>
            </div>

            <div className="second">
                <div>
                    <h1>Stay on top of <span>things</span></h1>
                </div>
                <div className="content">
                    <p>
                    With your business data and content living in different apps and sheets of paper,
                    it’s harder than ever to stay on top of things. <b>PaperCloud</b> makes it easy to have
                    all your customer data, notes, invoices, inventory, previous balance, payments / order history,
                    and business expenses in one app — making it readily available to you at any given point in time.
                    </p>
                </div>

                <div className="annimate">
                    <div>
                        <h4>Invoices</h4>

                        <p>
                            Create professional looking Invoice in seconds.
                            Customise your invoice with your company logo 
                            and colour, set a tax rate, or give discounts,
                            and track payments — when you’re done, you can
                            choose to either download your invoice as a PDF,
                            send it via email, WhatsApp or DM.
                        </p>
                    </div>
                    
                    <div>
                        <h4>Expenses</h4>

                        <p>
                        Track all personal or business expense with ease.
                        Categorise the type of expense with more 50 different
                        categories. See sum total of all your expenses and 
                        cash profits for a given month at glance
                        </p>
                    </div>
                    
                    <div>
                        <h4>Client Folder</h4>

                       <p>
                        Just like a physical folder — Client Folder is a collection
                        of all your customer’s data neatly organised into one place.
                        Their phone number, email, shipping address, order history, 
                        invoices, notes, and most importantly a track record of all
                        their payments, and balance they might be owing you.
                       </p>
                    </div>
                    
                    <div>
                        <h4>Notes</h4>

                        <p>
                            With Notes you can save specific information about your customer,
                            whether it’s their body measurements, shipping address, order details,
                            or any form of written content that you need to remember about them.
                        </p>
                    </div>
                    
                    <div>
                        <h4>Contacts</h4>

                       <p>
                            makes it possible for you to separate your business contacts
                            from your personal contacts. You can also group your business contacts 
                            by leads ( clients you’re yet to close as customers ) or customer 
                            ( clients that have paid for your product or service in the past ).
                       </p>
                    </div>
                    
                    <div>
                        <h4>Inventory Tracking</h4>
                    

                        <p>
                            With Catalog you can bring your inventory or the services you offers 
                            into PaperCloud. And as you sell from your inventory PaperCloud automatically
                            keeps track of what’s left in stock. Saving you time and stress of doing 
                            any manual work.
                        </p>
                    </div>
                </div>
                <div className="a">
                    
                <a href="*">Use  <b>PaperCloud</b>  FREE for  <b>14 days</b> </a>
                
                </div>
            </div>
  
            <div className="third">
                <div className="fun">
                    
                    <div className="rapper">
                        <img  src={Search} alt="Appstore" />
                    </div>          
                    <div className="needed">
                        <h5>Everything at your <span>Fingertips</span></h5>

                    </div>

                </div>
                <div className="with">
                    <div>
                        
                        <h5>With<span> Universal Search</span> </h5>

                    </div>
                    <div>
                        <p>
                             You can search across all your records — Notes, Invoices, Contacts,
                            and Expenses from a unified search bar using keywords or a phrase.
                            The universal search makes it super easy to find anything you’re
                            looking for with ease
                        </p>
                    </div>
                </div>
            </div>

            <div className="forth">
                <h2>Don’t take our word for it <span>— take theirs</span></h2>
                <div className="annimat">
                    
                    <div>
                        <p>
                            I just downloaded it... its a must have for all SMEs…….
                            its the user friendly interface for me. Well done @usepapercloud 👏 👏 👏
                        </p>
                        
                    </div>

                    <div>
                        <p>
                            @UsePaperCloud good to discover this at a time when wave plans to stop 
                            providing services to certain locations. Well done. @Amani_Art
                        </p>
                    </div>

                    <div>
                        <p>
                            Hiyaaa
                            So I just updated my app and I discovered we can now track our inventory
                        </p>
                        <p>
                            Omggggggggggg
                            See ehnnnn... You are doing such an amazing job
                            And I love the app like craz
                        </p>
                    </div>

                    <div>
                        <p>
                            Paper cloud gives me the desired flexibility when documenting 
                            my expenses and managing invoices with clients.
                        </p>
                        <p>
                            A seamless way for me track my income and expenses when I freelance.
                
                        </p>
                    </div>

                    <div>
                        <p>
                            I like the fact that it’s very user friendly yet packed with useful
                             tools for business. All the information can be seen at a glance via 
                            summaries and invoices can be downloaded or sent via email
                        </p>
                        <p>
                            I highly recommend 👌🏽
                        </p>
                    </div>

                    <div>
                        <p>
                            I think every entrepreneur should download PAPER CLOUD
                        </p>
                        <p>
                            It's super convenient and it tells you how much transaction you did in month,
                            how much has been paid and how much that's owed. I highly recommend.
                        </p>
                    </div>

                </div>
            </div>

            <div className="accessible">
                <div>
                    <div>
                        
                        <h3>Accessible Anywhere — even if you’re <span>Offline</span></h3>
                    </div>
                    <div className="middle">
                        <p>
                            You can access all your business information, customer details, notes,
                            invoices, and expense reports, from any of your favourite devices — even 
                            if you’re offline
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img className="ipad"     src={Ipad} alt="Appstore" />
                    <img className="lap"      src={Laptop} alt="Appstore" />
                    <img className="tab"      src={Iphone} alt="Appstore" />
                    
                    
                   

                </div>
                <div className="for">
                   <div>
                   <a href="*">Use &nbsp; <span>PaperCloud</span> &nbsp; FREE for &nbsp; <span>14 days</span> &nbsp; </a>
                    
                   </div>
                   <div>
                   <span className="class">…See how easy it makes running your business.</span>
                   </div>
                    <div>
                        <h6 className="start">Start your 14 days free trial. No credit card required. No strings attached.</h6>
                    </div>
                </div>
               
                
            </div>

            <div className="final">
                <div >
                    <div className="cloud">
                        <h1>PaperCloud <span>Pricing</span></h1>
                    </div>
                   <div className="cloud">
                        <p>
                            <span>PaperCloud</span> has a simple pricing with no hidden costs.
                            You can switch between plans at any time. Cancel any
                            time to end your subscription, and you won’t be charged again.
                        </p>
                   </div>


                </div>
                <div className="style">
                    <div className="price">
                        <div className="white">
                            <h6 >1 Month</h6>
                            <h4 >₦2,550</h4>
                            <h2 >Monthly</h2>
                        </div>
                        <div>
                            <h6 >Lifetime</h6>
                            <h4 >₦80,000</h4>
                            <h2 >One-time Payment</h2>
                        </div>
                        <div className="white">
                            <h6 >12 Months</h6>
                            <h4 >₦25,600</h4>
                            <h2 >Yearly</h2>
                        </div>
                    
                    </div>
                    <div className="a">
                    <a href="*">Use &nbsp; <span>PaperCloud</span> &nbsp; FREE for &nbsp; <span>14 days</span> &nbsp; </a>
                    </div>
                    <h6 className="start">Start your 14 days free trial. No credit card required. No strings attached.</h6>
                </div>
            </div>
    </div>
     );
}
 
export default First;
