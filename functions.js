// global variable storing the JSON data as an object
var bajaao = { 

// array of objects to store the products that are in clearance sale
"clearanceSale" : 
[
    { 
        "productName":"Behringer Xenyx 502 Mixer", 
        "productID":"SKU : BEHRINGERUMC202HD",
        "discount":"14%", 
        "actualPrice":5384, 
        "discountPrice":4590, 
        "reviews":1, 
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/behringer_xenyx_502_mixer_d3b977d6-21b9-487d-af0f-552d5cfdd390_x700.jpeg?v=1479724112"
    },
    
    { 
        "productName":"Fender Super Deluxe Vintage Style Guitar and Bass Strap", 
        "productID":"SKU : FENDERSA105CENAT",
        "discount":"45%", 
        "actualPrice":3125, 
        "discountPrice":1699, 
        "reviews":null, 
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/FEN-099-0664-006_x700.jpg?v=1484133760"
    },
    
    { 
        "productName":"Epiphone Les Paul Acoustic Electric Ukulele Outfit", 
        "productID":"SKU : FENDERSA105CENAT",
        "discount":"48%", 
        "actualPrice":15375, 
        "discountPrice":7889,
        "reviews":3, 
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/HS_x700.jpg?v=1456493591"
    },
    
    { 
        "productName":"T.C. Electronic SpectraComp Mini Bass Compressor Pedal", 
        "productID":"SKU : TCELECSPECTRABASSCOMP",
        "discount":"15%", 
        "actualPrice":11400, 
        "discountPrice":9613, 
        "reviews":2, 
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/TCELECSPECTRABASSCOMP_x700.jpg?v=1496042877"
    }
],
 

// products stored with reference to their productIDs 
// and an object is created which contain different categories 
// of the product which further contain the sub-categories 
// as their value in the form of array of objects
"products":
{
    "guitars": 
    [
        {
            "electric":["SKU : VAU-ST1RW-SB","SKU : VAU-LP1MN-TSB","SKU : YAMAHAPAC012DMB"]
        },
        {
            "bass":["SKU : FENDERAMSTDJBASSVRW3TS","SKU : YAM-TRBX174-METRD","SKU : ESPLTDB204SM"]
        }
    ],
    "drums":["SKU : HAVANAHV522SIL5PCSDRUMSET","SKU : MIL-MX-JR","SKU : PEARLEXX725SPC91RW","SKU : GRE-CT1J484SWG"]
},
 

// details of the products stored in an array of objects 
// the objects contains product's name, ID, brand name, specs, price etc
// nesting is done here to store data
"productDetails":
[
    {
        "productName":"Vault By Bajaao ST1RW Strat Style Electric Guitar",
        
        "productID":"SKU : VAU-ST1RW-SB",
        
        "productBrand":"Vault",
        
        "productFeatures":["Sycamore Body","Maple neck","Rosewood fretboard","HSS pickup"],
        
        "productSpecifications":
        {
            "body":"Sycamore",
            "neckType":"Maple",
            "fretboard":"Rosewood",
            "frets":22,
            "pickup":"1x Humbucker 2x Single Coil",
            "pickguard":"White",
            "hardware":"Chrome",
            "bridge":"Tremolo"
        },
        
        "price":11055,
        
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/VAU-ST1RW-SB_x700.jpg?v=1486988496",
        
        "colors":["Metallic Black","Sunburst","Blue"],
        
        "reviews":
        [
            {
                "reviewBy":"Harsh H.",
                "review":"First of all, you guys know how to pack and about the guitar, its fantastic!"
            },
            {
                "reviewBy":"Tanush Tambe",
                "review":"this guitar is good at looking on paper.hss pickups is big benifit of this product and the main highlight is ots price which is really low looking at its specs."
            }
        ]
    },
    
    
    {
        "productName":"Vault By Bajaao LP1MN Les Paul Style Electric Guitar",
        
        "productID":"SKU : VAU-LP1MN-TSB",
        
        "productBrand":"Vault",
        
        "productFeatures":["Basswood body","Maple neck","Rosewood fretboard","Whammy Bar","HSH pickup"],
        
        "productSpecifications":
        {
            "body":"Basswood",
            "neckType":"Maple",
            "fretboard":"Rosewood",
            "frets":24,
            "pickup":"2x Humbucker 1x Single Coil",
            "hardware":"Chrome"
        },
        
        "price":18910, 
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/1_248d476a-bac9-4e8b-ab41-448c5242fc82_x700.jpg?v=1489761307",
        
        "colors":["Tobacco Sunburst","Black"],
        
        "reviews":
        [
            {
                "reviewBy":"Delvin George",
                "review":"The delivery was before time and you get this electric guitar and amp for reasonable price with other accessories.It's fine while playing though have some glitches. Its amps plug pin is not indian though you could use a converter for powering the amp. Having fun playing my first electric guitar !!!"
            }
        ]
    },
    
    
    {
        "productName":"Yamaha Pacifica PAC012 Electric Guitar",
        
        "productID":"SKU : YAMAHAPAC012DMB",
        
        "productBrand":"Yamaha",
        
        "productFeatures":["Solid agathis body","Maple neck","Rosewood Fingerboard","One humbucker/2 single-coil pickups","Chrome tuners","White pickguard","Vintage-style chrome tremolo"],
        
        "productSpecifications":
        {
            "construction":"Bolt-on",
            "scaleLength":"648mm",
            "fingerboard":"Sonokeling",
            "radius":"350mm",
            "frets":22,
            "body":"Agathis",
            "neck":"Maple",
            "bridge":"Vintage Tremolo",
            "pickups":"Single Coil X 2, Humbucking X 1",
            "pickupSwitch":"5-Position",
            "controls":"Master Volume, Master Tone",
            "warranty":"Yamaha Limited Lifetime"
        },
        
        "price":15000,
        
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/16_754250fe-4332-4f3f-94e9-c720e0ae4ff5_x700.jpg?v=1464619014",
        
        "colors":["Red Metallic","Dark Blue Metallic","White"],
        
        "reviews":
        [
            {
                "reviewBy":"Magnus Bane",
                "review":"really cool product to use"
            },
            {
                "reviewBy":"Alex Pears",
                "review":"I didn't expected this quality from Yamaha total money wastage"
            }
        ]
    },
    
    
    {
        "productName":"ESP LTD B-204SM Bass",
        
        "productID":"SKU : ESPLTDB204SM",
        
        "productBrand":"ESP",
        
        "productFeatures":["Merbau body","Neck-through-body construction","5-piece mahogany-maple neck","34\" scale","Standard 42mm nut","Rosewood fingerboard","24 XJ frets","Black nickel hardware","Grover tuners","ESP BB-604 string-thru-body bridge","ESP SB-4 pickup set","Volume and balance controls","ESP ABQ3 3-band active EQ","Case sold separately"],
        
        "productSpecifications":null,
        
        "price":37999,
        
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/EB204SMBK-P_35d707a5-3fc0-4f38-a8b1-366c432ba1e3_x700.jpg?v=1471696739",
        
        "colors":null,
        
        "reviews":null
    },

    {
        "productName":"Roland TD30KV V-Pro Series Electronic Drum Kit + MDS25 Stand",
        
        "productID":"SKU : ROLANDTD30KV-BUN1",
        
        "productBrand":"Roland",
        
        "productFeatures":["Flagship V-Drums with advanced sensing technology and SuperNATURAL® sounds","Expressive and accurate playability produced by Behavior Modeling","Professional V-Edit mode for customizing sounds","Dedicated “Ambience” fader with new room-ambience and overhead-mic simulation","Compact, solid drum stand (MDS-12V) for professional studio requirements","USB memory port for data backup and audio playback (WAV/MP3)","Separate USB-MIDI port for computer connectivity","New lightweight 10-inch V-Pad (PDX-100) for toms"],
        
        "productSpecifications":
        {
            "drumStand":"MDS-12V x 1 (included in U.S.)",
            "extraTriggerInputJack":"5 (TOM4, AUX1 - AUX4)",
            "accessories":"Setup Guide",
            "width":"1,500mm",
            "depth":"1,200mm",
            "height":"1,250mm",
            "weight":"39kg"
        },

        "price":631726,
        
        "image":"https://cdn.shopify.com/s/files/1/0657/6821/products/ROLANDTD30KV-BUN1_x700.jpg?v=1483521619",
        
        "colors":null,
        
        "reviews":null
    }
],
 
 
// an array storing details about the shipped products
// with their details about shipping location, payment etc.
"shippedItems": 
[
    {
        "productName":"Behringer DJX750 5-Channel Pro DJ Mixer",
        "productID":"SKU : BEHRINGERDJX750",
        "shippedDate":"28 Dec 2017",
        "shippedFrom":"Delhi",
        "shippedTo":"Panipat",
        "paymentDone":true
    },
    
    {
        "productName":"Casio SA47 Mini Keyboard with Power Adapter",
        "productID":"SKU : CASIOSA47-BUN1",
        "shippedDate":"29 Dec 2017",
        "shippedFrom":"Mumbai",
        "shippedTo":"Pune",
        "paymentDone":false
    },
    
    {
        "productName":"JBL LSR 305 5 inch Two-Way Powered Studio Monitor/Speaker",
        "productID":"SKU : JBLLSR305",
        "shippedDate":"27 Dec 2017",
        "shippedFrom":"Chandigarh",
        "shippedTo":"Kalka",
        "paymentDone":false
    },
    
    {
        "productName":"Yamaha PSR-F51 Portable Keyboard with Stand and Polishing Cloth",
        "productID":"SKU : YAMAHAPSRF51-BUN3",
        "shippedDate":"29 Dec 2017",
        "shippedFrom":"Jalandhar",
        "shippedTo":"Bathinda",
        "paymentDone":true
    },
    
    {
        "productName":"Samson C01U Pro USB Studio Condenser Microphone",
        "productID":"SKU : SAMSONC01UPRO",
        "shippedDate":"30 Dec 2017",
        "shippedFrom":"Jaipur",
        "shippedTo":"Bikaner",
        "paymentDone":false
    },
    
    {
        "productName":"Vault By Bajaao HA1000 Key C 10-Hole Beginner Harmonica",
        "productID":"SKU : VAU-HA1000",
        "shippedDate":"31 Dec 2017",
        "shippedFrom":"Shimla",
        "shippedTo":"Solan",
        "paymentDone":true
    }
],


// array of strings containing the names of the 
// brand that BAJAAO deals in
"brands":["Yamaha","Roland","Casio","Behringer","Marshall","Vault","Fender","Zoom","Focusrite"],
   
    
// items that are out of stock for now stored in array with their IDs
"outOfStockItems": ["SKU : TCELECTRONICSHAKERVIBRATOMINI","SKU : ROLANDFV30H","SKU : TCE-TC157","SKU : BEHRINGERUS600"]
    
};


// ***************************************************************************************************
// FIRST FUNCTION to read about products in respect to their IDs 
// in the bajaao object and display the result in console
function readProducts(){
    
    var num; // declaring local variable num
    num=askUser(); // invoking ask function and assigning the return value to number
    
        if (num==0) {
            console.log(bajaao.products.guitars[0]);
            console.log(bajaao.products.guitars[1])
        } else if(num==1){
            console.log(bajaao.products.drums);
        } else {
            return alert("INVALID NUMBER!");
        }
    
    function askUser() {
        return prompt("Enter 0 to know about Guitars, 1 to know about Drums");
    }
}    
    
// function invocation
readProducts();
// ***************************************************************************************************



// ***************************************************************************************************
// SECOND FUNCTION to check that a particular product 
// is within the specified price limit
// it is using the product name and price as reference
function accordingToPrice(value) {
    
    var i=0;
    do {
        console.log(bajaao.productDetails[i].productName + " is within the limit specified.");
        i++;
    } while (bajaao.productDetails[i].price <= value);
}


// function invocation
accordingToPrice(20000);
// ***************************************************************************************************    



// ***************************************************************************************************    
// ***************************************************************************************************
// THIRD FUNCTION to check the payment status 
// from the values stored in array shippedItems
// and check for their payment status
function shippedPaymentStatus(value) {
    
    var i, max;
    max = bajaao.shippedItems.length;
    
    for (i=0;i<max;i++) {
        
        if ( value==true && bajaao.shippedItems[i].paymentDone==true) {
            alert ("Payment Done for " + bajaao.shippedItems[i].productName + "!");
        } else {
            console.log ("Payment pending for " + bajaao.shippedItems[i].productName + ", buyer opted for COD.");
        }   
    }
}
    

// function invocation    
shippedPaymentStatus(true);
// ***************************************************************************************************
// ***************************************************************************************************    
    

// ANOTHER THIRD FUNCTION to check the reviews of products
// which are in clearance sale
// it uses the reviews property of the products 
// and gives alert message accordingly
function checkingReviews() {
    
    var i, max;
    max=bajaao.clearanceSale.length;
    
    for (i=0;i<max;i++) {
        
        if (bajaao.clearanceSale[i].reviews==null) {
            console.log("Increase discount by 5% on " + bajaao.clearanceSale[i].productName);
        }else{
            alert(bajaao.clearanceSale[i].productName+ "is doing okay!");
        }
    }
}


// function invocation
checkingReviews();
// ***************************************************************************************************
// ***************************************************************************************************