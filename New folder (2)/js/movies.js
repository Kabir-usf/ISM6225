document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        {
            title: "3 Idiots",
            imdbRating: 8.4,
            trailer: "https://youtu.be/embed/MHGP2MG6s60LcfMy",
            image: "./img/3id.jpg",
            cast: ["Aamir Khan", "Sharman Joshi"],
            theme: "Comedy, Drama"
        },
        {
            title: "Dangal",
            
            imdbRating: 8.4,
            trailer: "https://www.youtube.com/embed/x_7YlGv9u1g",
            image: "./img/dangal.jpg",
            cast: ["Aamir Khan","Sanya Malhotra"],
            theme: "Action, Biography"
        },
        {
            title: "PK",
        
           
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/SOXWc32k4zA",
            image: "./img/PK.jpg",
            cast: ["Aamir Khan", "Anushka Sharma"],
            theme: "Comedy, Drama, Sci-Fi"
        },
        {
            title: "Dabangg",
           
            imdbRating: 6.2,
            trailer: "https://www.youtube.com/embed/v5v3JA2b9vY", // Replace with the actual trailer URL if available
            image: "./img/D.jpg",
            cast: ["Salman Khan", "Sonakshi Sinha"],
            theme: "Action, Comedy, Drama"
        },
        {
            title: "Chennai Express",
            
            imdbRating: 6.0,
            trailer: "https://www.youtube.com/embed/Ph9tRvabIBg?si=rGp6IcxP796lhvhC", // Replace with the actual trailer URL if available
            image: "./img/express.jpeg",
            cast: ["Deepika Padukone", "Shah Rukh Khan"],
            theme: "Action, Comedy, Drama"
        },
        {
            title: "Om Shanti Om",
            
            imdbRating: 6.7,
            trailer: "https://www.youtube.com/embed/9oeGoQGt7Ao?si=GC_oL1BW9TudqDS0/", // Replace with the actual trailer URL if available
            image: "./img/OMO.jpg",
            cast: ["Shah Rukh Khan", "Deepika Padukone"],
            theme: "Action, Comedy, Drama"
        },
        {
            title: "Main Hoon Na",
            
            imdbRating: 7.0,
            trailer: "https://www.youtube.com/embed/lzOH61u36W0?si=itYWVxT6ia7M9N1i", // Replace with the actual trailer URL if available
            image: "./img/Main.jpg",
            cast: ["Shah Rukh Khan", "Sushmita Sen"],
            theme: "Action, Comedy, Drama"
        },
        {
            title: "Mohabbatein",
            
            imdbRating: 7.1,
            trailer: "https://www.youtube.com/embed/6pbG4aVrs5E?si=T_l0vI4fVvZcTFlB", // Replace with the actual trailer URL if available
            image: "./img/Mohabb.jpg",
            cast: ["Amitabh Bachchan","Uday Chopra"],
            theme: "Drama, Musical, Romance"
        },
        {
            title: "Don 2",
            
            imdbRating: 7.1,
            trailer: "https://www.youtube.com/embed/_X5w-6PqoZ0?si=dqQsZFZb-ewNRLss", // Replace with the actual trailer URL if available
            image: "./img/D2.jpg",
            cast: ["Shah Rukh Khan","Om Puri"],
            theme: "Action, Crime, Thriller"
        },
        {
            title: "Agneepath",
            
            imdbRating: 7.0,
            trailer: "https://www.youtube.com/embed/z0KPQstwMQw?si=fXIKLoRqjulgmNot", // Replace with the actual trailer URL if available
            image: "./img/agnepath.jpg",
            cast: ["Hrithik Roshan", "Sanjay Dutt"],
            theme: "Action, Drama"
        },
        {
            title: "RNBJ",
            rating: 7.2,
            imdbRating: 7.2,
            trailer: "https://www.youtube.com/embed/eBi8syxPd14?si=l4SXy0TJQBnJofWO", // Replace with the actual trailer URL if available
            image: "./img/RNBJ.jpg",
            cast: ["Shah Rukh Khan", "Anushka Sharma"],
            theme: "Comedy, Drama, Romance"
        },
        {
            title: "Jab Tak Hai Jaan",
            rating: 6.7,
            imdbRating: 6.7,
            trailer: "https://www.youtube.com/embed/v0UXgoJ9Shg?si=_U58n0x5g2t2qP5_", // Replace with the actual trailer URL if available
            image: "./img/JBTJ.jpg",
            cast: ["Shah Rukh Khan", "Katrina Kaif"],
            theme: "Drama, Romance"
        },
        {
            title: "Fanaa",
            rating: 7.0,
            imdbRating: 7.0,
            trailer: "https://www.youtube.com/embed/kofrlCHyiaU?si=ELxOvpfzsytJZWMg", // Replace with the actual trailer URL if available
            image: "./img/faana.jpg",
            cast: ["Aamir Khan","Rishi Kapoor"],
            theme: "Drama, Romance, Thriller"
        },
        {
            title: "Don",
            rating: 7.2,
            imdbRating: 7.2,
            trailer: "https://www.youtube.com/embed/_cJRiAfr2PE?si=hmCfjPPNohu9nFio", // Replace with the actual trailer URL if available
            image: "./img/DOn.jpg",
            cast: ["Shah Rukh Khan","Arjun Rampal"],
            theme: "Action, Crime, Thriller"
        },
        {
            title: "Aashiqui 2",
            rating: 7.0,
            imdbRating: 7.0,
            trailer: "https://www.youtube.com/embed/FyXXgpPqe6w?si=JKdJsqYuaOjopM83", // Replace with the actual trailer URL if available
            image: "./img/Asshiq2.jpg",
            cast: ["Aditya Roy Kapoor", "Shraddha Kapoor"],
            theme: " Music, Romance"
        },
        {
            title: "KKKG",
            rating: 7.4,
            imdbRating: 7.4,
            trailer: "https://www.youtube.com/embed/7uY1JbWZKPA?si=AUVqKA1-V6DsBarx", // Replace with the actual trailer URL if available
            image: "./img/KBHB.jpg",
            cast: ["Shah Rukh Khan","Amitabh Bachchan"],
            theme: "Drama, Musical"
        },
        {
            title: "Ghajini",
            rating: 7.3,
            imdbRating: 7.3,
            trailer: "https://www.youtube.com/embed/jEccwrX6AgQ?si=8IyLDIJZ5ScQ8Evm", // Replace with the actual trailer URL if available
            image: "./img/gajini.jpg",
            cast: ["Aamir Khan", "Jiah Khan"],
            theme: "Action, Drama, Mystery"
        },
        {
            title: "Devdas",
            rating: 7.6,
            imdbRating: 7.6,
            trailer: "https://www.youtube.com/embed/8tuHQWGMQwY?si=KgS3Klh3cT2k8tx7", // Replace with the actual trailer URL if available
            image: "./img/devdas.jpg",
            cast: ["Shah Rukh Khan", "Madhuri Dixit"],
            theme: "Romance"
        },
        {
            title: "Raees",
            rating: 6.8,
            imdbRating: 6.8,
            trailer: "https://www.youtube.com/embed/J7_1MU3gDk0?si=-1JbdzxJOeVM4l6N", // Replace with the actual trailer URL if available
            image: "./img/R.jpg",
            cast: ["Shah Rukh Khan", "Mahira Khan"],
            theme: "Action, Crime, Drama"
        },

        {
            title: "Talaash",
            rating: 7.2,
            imdbRating: 7.2,
            trailer: "https://www.youtube.com/embed/M97P3zoUIos?si=2YaykKj17S5wpegY",
            image: "./img/taalaash.jpg",
            cast: ["Aamir Khan", "Rani Mukerji"],
            theme: "Crime, Drama, Mystery",
            director: "Reema Kagti",
            filmingBudget: "Rs. 40 crore ($6,100,000)",
            boxOfficeGross: "Rs. 174 crore ($27,000,000)"
        },
        {
            title: "Monsoon Wedding",
            rating: 7.4,
            imdbRating: 7.4,
            trailer: "https://www.youtube.com/embed/sjQjw-UyAX0?si=EY-UYvDWY9DjJi5f",
            image: "./img/MW.jpg",
            cast: ["Naseeruddin Shah", "Lillete Dubey"],
            theme: "Comedy,Romance",
            director: "Mira Nair",
            filmingBudget: "$1,200,000",
            boxOfficeGross: "$30,787,356"
        },
        {
            title: "Wake Up Sid",
            rating: 7.6,
            imdbRating: 7.6,
            trailer: "https://www.youtube.com/embed/Ngimy3GpHS0?si=1CdbwNG9mkNMyQDO",
            image: "./img/WUS.jpg",
            cast: ["Ranbir Kapoor", "Shruti Bapna"],
            theme: "Comedy, Drama",
            director: "Ayan Mukerji",
            filmingBudget: "Rs. 15 crore ($2,300,000)",
            boxOfficeGross: "Rs. 46.2 crore ($7,100,000)"
        },
        {
            title: "RockStar",
            rating: 7.7,
            imdbRating: 7.7,
            trailer: "https://www.youtube.com/embed/bD5FShPZdpw?si=MUIV7MlZPVhGCeFl",
            image: "./img/RK.jpg",
            cast: ["Ranbir Kapoor", "Shammi Kapoor"],
            theme: "Drama, Music",
            director: "Imtiaz Ali",
            filmingBudget: "Rs. 60 crore ($9,200,000)",
            boxOfficeGross: "Rs. 74.11 crore ($11,000,000)"
        },
        {
            title: "Veer-Zaara",
            rating: 7.8,
            imdbRating: 7.8,
            trailer: "https://www.youtube.com/embed/OSaVImLnnsw?si=aZs-pmU8bSFLOpBU",
            image: "./img/V.jpg",
            cast: ["Amitabh Bachchan", "Shah Rukh Khan"],
            theme: "Drama, Family, Musical",
            director: "Aditya Chopra",
            filmingBudget: "Rs. 18.1 crore ($2,800,000)",
            boxOfficeGross: "Rs. 108 crore ($17,000,000)"
        },
        {
            title: "Jaane Tu",
            rating: 7.5,
            imdbRating: 7.5,
            trailer: "https://www.youtube.com/embed/NYqqFeLzRiI?si=C6ibJXAZcApIsySO",
            image: "./img/j.jpg",
            cast: ["Imran Khan", "Genelia D’Souza"],
            theme: "Comedy, Drama, Romance",
            director: "Abbas Tyrewala",
            filmingBudget: "Rs. 11 crore ($1,700,000)",
            boxOfficeGross: "Rs. 83.2 crore ($13,000,000)"
        },
        {
            title: "My Name Is Khan",
            rating: 8.0,
            imdbRating: 8.0,
            trailer: "https://www.youtube.com/embed/nqxgYT3TYzY?si=MSexT5fnFIkBlqnJ",
            image: "./img/MNK.jpg",
            cast: ["Shah Rukh Khan","Sheetal Menon"],
            theme: "Drama",
            director: "Karan Johar",
            filmingBudget: "Rs. 38 crore ($5,800,000)",
            boxOfficeGross: "Rs. 200 crore ($31,000,000)"
        },
        {
            title: "Kai po che!",
            rating: 7.6,
            imdbRating: 7.6,
            trailer: "https://www.youtube.com/embed/nGSyqEOo8k8?si=0L0MYRJSi6Y1N1kq",
            image: "./img/KPC.jpg",
            cast: ["Sushant Singh Rajput", "Raj Kumar Yadav"],
            theme: "Drama, Sport",
            director: "Abhishek Kapoor",
            filmingBudget: "Rs. 30 crore ($4,600,000)",
            boxOfficeGross: "Rs. 8.04 crore ($7,400,000)"
        },
        {
            title: "Water",
            rating: 7.7,
            imdbRating: 7.7,
            trailer: "https://www.youtube.com/embed/2R0pRl18js8?si=QucyrmTVgq41ZEJL",
            image: "./img/water.jpg",
            cast: ["Lisa Ray","John Abraham"],
            theme: "Drama",
            director: "Deepa Mehta",
            filmingBudget: "N/A",
            boxOfficeGross: "$10,422,387"
        },
        {
            title: "English Vinglish",
            rating: 7.8,
            imdbRating: 7.8,
            trailer: "https://www.youtube.com/embed/wmGVY4T88dc?si=MH789-hUlRz8tlOr",
            image: "./img/EV.jpg",
            cast: ["Sridevi"],
            theme: "Comedy, Drama, Family",
            director: "Gauri Shinde",
            filmingBudget: "Rs. 15 crore ($2,300,000)",
            boxOfficeGross: "Rs. 85 crore ($13,000,000)"
        },
        {
            title: "Special 26",
            rating: 8.0,
            imdbRating: 8.0,
            trailer: "https://www.youtube.com/embed/PiyQb28geOg?si=mQYRu3XeE6ZoHicE",
            image: "./img/26.jpg",
            cast: ["Akshay Kumar", "Kajal Agarwal"],
            theme: "Crime, Drama",
            director: "Neeraj Pandey",
            filmingBudget: "Rs. 42 crore ($6,400,000)",
            boxOfficeGross: "Rs. 70 crore ($11,000,000)"
        },
        {
            title: "Vicky Donor",
            rating: 7.8,
            imdbRating: 7.8,
            trailer: "https://www.youtube.com/embed/Jme-VkIzkoU?si=FBu9bn8GXi6CPGoK",
            image: "./img/VD.jpg",
            cast: ["Ayushmann Khurrana", "Yami Gautam"],
            theme: "Comedy, Romance",
            director: "Shoojit Sircar",
            filmingBudget: "Rs. 5 crore ($770,000)",
            boxOfficeGross: "Rs. 64.50 crore ($9,900,000)"
        },
        {
            title: "Kal Ho Naa Ho",
            rating: 8.0,
            imdbRating: 8.0,
            trailer: "https://www.youtube.com/embed/tVMAQAsjsOU?si=vhGiwfNMH6SLeSm9",
            image: "./img/Kal ho na ho.jpg",
            cast: ["Preity Zinta", "Shah Rukh Khan"],
            theme: "Comedy, Drama, Romance",
            director: "Nikhil Advani",
            filmingBudget: "Rs. 30 crore ($460,000)",
            boxOfficeGross: "Rs. 78 crore ($1,100,000)"
        },
        {
            title: "Paan Singh Tomar",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/9NS6QaPncFg?si=6dRUgbxM0jrpXzyh",
            image: "./img/Paar sighn.jpg",
            cast: ["Irrfan Khan", "Mahie Gill"],
            theme: "Action, Biography, Crime",
            director: "Tigmanshu Dhulia",
            filmingBudget: "Rs. 8 crore ($1,200,000)",
            boxOfficeGross: "Rs. 38.4 crore ($5,900,000)"
        },
        {
            title: "Munna 2",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/OE6f1oHgeDg?si=tLM-LEVuKQTXGjgm",
            image: "./img/LGMB.jpg",
            cast: ["Sanjay Dutt", "Arshad Warsi"],
            theme: "Comedy, Romance",
            director: "Rajkumar Hirani",
            filmingBudget: "Rs. 12 crore ($1,800,000)",
            boxOfficeGross: "Rs. 119 crore ($18,000,000)"
        },
        {
            title: "OMG!",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/S3b7F4rGre0?si=1llPTSbw_GT3bvcr",
            image: "./img/OMG.jpg",
            cast: ["Akshay Kumar", "Paresh Rawal"],
            theme: "Comedy, Drama",
            director: "Umesh Shukla",
            filmingBudget: "Rs. 15 crore ($2,300,000)",
            boxOfficeGross: "Rs. 95 crore ($15,000,000)"
        },
        {
            title: "Jab We Met",
            rating: 7.9,
            imdbRating: 7.9,
            trailer: "https://www.youtube.com/embed/Z6cE7g9feSs?si=NL4W-m_bwRSyhLxS",
            image: "./img/JWM.jpg",
            cast: ["Shahid Kapoor", "Tarun Arora"],
            theme: "Comedy, Drama, Romance",
            director: "Imtiaz Ali",
            filmingBudget: "Rs. 15 crore ($2,300,000)",
            boxOfficeGross: "Rs. 30.25 crore ($4,600,000)"
        },
        {
            title: "Dev.D",
            rating: 8.0,
            imdbRating: 8.0,
            trailer: "https://www.youtube.com/embed/hxQ59G1xYuY?si=6TyQuJ2iLAKaobKd",
            image: "./img/devd.jpg",
            cast: ["Abhay Deol", "Mahie Gill"],
            theme: "Drama, Romance",
            director: "Anurag Kashyap",
            filmingBudget: "Rs. 6 crore ($920,000)",
            boxOfficeGross: "Rs. 21.5 crore ($3,300,000)"
        },
        {
            title: "Hera Pheri",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/m1zMmVwWr-M?si=82RtXCWf_UjJyft7",
            image: "./img/HP.jpg",
            cast: ["Paresh Rawal", "Akshay Kumar"],
            theme: "Comedy, Crime",
            director: "Priyadarshan",
            filmingBudget: "Rs. 20 crore ($3,100,000)",
            boxOfficeGross: "Rs. 104 crore ($16,000,000)"
        },
        {
            title: "Black",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.imdb.com/title/tt0375611/",
            image: "./img/black.jpg",
            cast: ["Amitabh Bachchan", "Rani Mukerji"],
            theme: "Drama",
            director: "Sanjay Leela Bhansali",
            filmingBudget: "Rs. 18 crore ($2,700,000)",
            boxOfficeGross: "Rs. 32.25 crore ($4,900,000)"
        },
        {
            title: "Chak De! India",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/vdYlb7y7_hI?si=Vg0dFHJv2Ipk-Bgf",
            image: "./img/CDI.jpg",
            cast: ["Shah Rukh Khan", "Vidya Malvade"],
            theme: "Drama, Family, Sport",
            director: "Shimit Amin",
            filmingBudget: "Rs. 24 crore ($3,700,000)",
            boxOfficeGross: "Rs. 103.6 crore ($16,000,000)"
        },
        {
            title: "Zindagi Na Milegi Dobara",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/FJrpcDgC3zU?si=Mmph6q_swOYzKyYS",
            image: "./img/ZNMD.jpg",
            cast: ["Katrina Kaif", "Hrithik Roshan"],
            theme: "Comedy, Drama, Musical",
            director: "Zoya Akhtar",
            filmingBudget: "Rs. 55 crore ($8,400,000)",
            boxOfficeGross: "Rs. 153 crore ($23,000,000)"
        },
        {
            title: "Udaan",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/-N137wsl3TM?si=yXHp12ik_zJFFR11",
            image: "./img/udhaan.jpg",
            cast: ["Rajat Barmecha", "Ronit Roy"],
            theme: "Drama",
            director: "Vikramaditya Motwane",
            filmingBudget: "Rs. 5 crore ($766,000)",
            boxOfficeGross: "Rs. 3 crore ($460,000)"
        },
        {
            title: "Kahaani",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/rsjamVgPoI8?si=CtpMm5xRZ1A09TPv",
            image: "./img/khaani.jpg",
            cast: ["Vidya Balan","Dhritiman Chatterjee"],
            theme: "Mystery, Thriller",
            director: "Sujoy Ghosh",
            filmingBudget: "Rs. 8 crore ($1,200,000)",
            boxOfficeGross: "Rs. 104 crore ($16,000,000)"
        },
        {
            title: "A Wednesday!",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/oII-vaL3mZg?si=d-ItLehkwtyq2wFx",
            image: "./img/wednesday.jpg",
            cast: ["Anupam Kher", "Jimmy Shergill"],
            theme: "Crime, Drama, Thriller",
            director: "Neeraj Pandey",
            filmingBudget: "Rs. 5 crore ($770,000)",
            boxOfficeGross: "Rs. 2 crore ($1,800,000)"
        },
        {
            title: "Munnabhai M.B.B.S.",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/6lCGvu-hwX4?si=1oqCq-_tbhO6xfeS",
            image: "./img/munna.jpg",
            cast: ["Sunil Dutt", "Sanjay Dutt"],
            theme: "Comedy, Drama",
            director: "Rajkumar Hirani",
            filmingBudget: "Rs. 10 crore ($1,500,000)",
            boxOfficeGross: "Rs. 30.75 crore ($4,700,000)"
        },
        {
            title: "Gangs of Wasseypur (Part 1 and 2)",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/9ZpPQdrHfl8?si=0gXYYn3srkp3-a2j",
            image: "./img/GW.jpg",
            cast: ["Manoj Bajpayee","Nawazuddin Siddiqui"],
            theme: "Action, Comedy, Crime",
            director: "Anurag Kashyap",
            filmingBudget: "Rs 18.5 crore ($2,800,000)",
            boxOfficeGross: "Rs. 50.81 crore ($7,800,000)"
        },
        {
            title: "Lagaan: Once Upon a Time in India",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/Nhi4Azs2nEw?si=O3RFBNK-jbvAqep1",
            image: "./img/lagaan.jpg",
            cast: ["Aamir Khan", "Gracy Singh",],
            theme: "Drama, Musical, Sport",
            director: "Ashutosh Gowariker",
            filmingBudget: "Rs. 25 crore ($3,800,000)",
            boxOfficeGross: "Rs. 57.80 crore ($8,800,000)"
        },
        {
            title: "Swades: We, the People",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/vc7AZNWvs0M?si=GkZfSyOpP5771pKM",
            image: "./img/swades.jpg",
            cast: ["Shah Rukh Khan", "Gayatri Joshi"],
            theme: "Drama",
            director: "Ashutosh Gowariker",
            filmingBudget: "Unknown",
            boxOfficeGross: "Rs. 22 crore ($3,400,000)"
        },
        {
            title: "Barfi!",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/nQ3FYUgSjC8?si=mW-NI8JGSXfVL5nG",
            image: "./img/barfi.jpg",
            cast: ["Ranbir Kapoor", "Priyanka Chopra"],
            theme: "Comedy, Drama, Romance",
            director: "Anurag Basu",
            filmingBudget: "Rs. 30 crore $4,600,000)",
            boxOfficeGross: "Rs. 175 crore ($27,000,000)"
        },
        {
            title: "Dil Chahta Hai",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/OBAcYSSUf6o?si=2Jm742Or0WyhkR-r",
            image: "./img/DCH.jpg",
            cast: ["Aamir Khan", "Saif Ali Khan"],
            theme: "Comedy, Drama, Romance",
            director: "Farhan Akhtar",
            filmingBudget: "Rs. 14 crore ($2,100,000)",
            boxOfficeGross: "Rs. 31 crore ($7,500,000)"
        },
        {
            title: "Rang De Basanti",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/QHhnhqxB4E8?si=YajpYFsGhqts5JbP",
            image: "./img/Rgdb.jpg",
            cast: ["Aamir Khan", "Soha Ali Khan"],
            theme: "Comedy, Drama",
            director: "Rakeysh Omprakash Mehra",
            filmingBudget: "Rs. 26 crore ($4,000,000)",
            boxOfficeGross: "Rs. 94 crore ($14,000,000)"
        },
        {
            title: "Taare Zameen Par",
            rating: 8.4,
            imdbRating: 8.4,
            trailer: "https://www.youtube.com/embed/F-PAI2HnQUo?si=6lnmSScCX9xju2i3",
            image: "./img/TZP.jpg",
            cast: ["Darsheel Safary", "Aamir Khan"],
            theme: "Drama, Family",
            director: "Aamir Khan",
            filmingBudget: "Rs. 12 crore ($1,800,000)",
            boxOfficeGross: "Rs. 88.9 crore ($14,000,000)"
        },
        {
            title: "3 Idiots",
            rating: 8.4,
            imdbRating: 8.4,
            trailer: "https://www.imdb.com/title/tt1187043/",
            image: "./img/3id2.jpg",
            cast: ["Aamir Khan", "Madhavan", "Mona Singh"],
            theme: "Comedy, Drama",
            director: "Rajkumar Hirani",
            filmingBudget: "Rs. 35 crore ($5,400,000)",
            boxOfficeGross: "Rs. 392 crore ($60,000,000)"
        },
        {
            title: "Bhaag Milkha Bhaag",
            rating: 8.2,
            imdbRating: 8.2,
            trailer: "https://www.youtube.com/embed/WbblCMem1ME?si=fzskFeGRjfq8pqst",
            image: "./img/BMB.jpg",
            cast: ["Farhan Akhtar", "Sonam Kapoor"],
            theme: "Action, Biography, Drama",
            director: "Rakeysh Omprakash Mehra",
            filmingBudget: "Rs. 30 crore ($4,600,000)",
            boxOfficeGross: "Rs. 104 crore ($16,000,000)"
        },
    

        {
            title: "Happy New Year",
            rating: 5.0,
            imdbRating: 5.0,
            trailer: "https://www.youtube.com/embed/S7gpiER8RnI?si=DkrfoZSMXfOQskmv", // Replace with the actual trailer URL if available
            image: "./img/HNY2.jpg",
            cast: ["Shah Rukh Khan", "Deepika Padukone"],
            theme: "Action, Comedy, Drama"
        },
        {
            title: "Kabir Singh",
            rating: 7.1,
            imdbRating: 7.1,
            trailer: "https://www.youtube.com/embed/RiANSSgCuJk?si=Y7MgjMIZT6X4Uu5e", // Replace with the actual trailer URL if available
            image: "./img/KS.jpg",
            cast: ["Shahid Kapoor", "Kiara Advani"],
            theme: "Action, Drama, Romance"
        },
        {
            title: "Yeh Jawaani Hai Deewani",
            rating: 7.2,
            imdbRating: 7.2,
            trailer: "https://www.youtube.com/embed/Rbp2XUSeUNE?si=vjd4lBVaPgIHamDs", // Replace with the actual trailer URL if available
            image: "./img/YJHD.jpg",
            cast: ["Ranbir Kapoor", "Deepika Padukone"],
            theme: "Drama, Musical, Romance"
        },
      
        {
            title: "Ek Tha Tiger",
            rating: 5.5,
            imdbRating: 5.5,
            trailer: "https://www.youtube.com/embed/SmUl0l8qBXw?si=uiafbJXIUrLIu3A-", // Replace with the actual trailer URL if available
            image: "./img/ETT.jpg",
            cast: ["Salman Khan", "Katrina Kaif"],
            theme: "Action, Adventure, Romance"
        },
        {
            title: "Gully Boy",
            rating: 7.9,
            imdbRating: 7.9,
            trailer: "https://www.youtube.com/embed/JfbxcD6biOk?si=poeO-KaZAWt2Dgrx", // Replace with the actual trailer URL if available
            image: "./img/GB.jpg",
            cast: ["Ranveer Singh", "Alia Bhatt"],
            theme: "Drama, Music"
        },
        {
            title: "Airlift",
            rating: 8.1,
            imdbRating: 8.1,
            trailer: "https://www.youtube.com/embed/vb5xCMbMfZ0?si=EIG7VwMJhUM8XWJt", // Replace with the actual trailer URL if available
            image: "./img/AL.jpg",
            cast: ["Akshay Kumar", "Nimrat Kaur"],
            theme: "Action, Drama, History"
        },
        
    ];

    const moviesContainer = document.getElementById("movies");
    const watchlistContainer = document.getElementById("watchlist");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const trailerModal = document.getElementById("trailerModal");
    const trailerFrame = document.getElementById("trailer");
    const modalClose = document.querySelector(".close");
    const themeFilter = document.getElementById("themeFilter");
    function displayMovies(filteredMovies = movies) {
        moviesContainer.innerHTML = filteredMovies.map(movie => `
            <div class="movie">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="details">
                    <h3>${movie.title}</h3>
                    <p>IMDb Rating: ${movie.imdbRating}</p>
                    <h4>Cast</h4>
                    <p>${movie.cast.join(", ")}</p>
                    <h5>Theme</h5>
                    <p>${movie.theme}</p>
                    <div class="buttons">
                        <button onclick="playTrailer('${movie.trailer}')">Watch Trailer</button>
                        <button onclick="addToWatchlist('${movie.title}')">Add to Watchlist</button>
                    </div>
                    <br>
                </div>
            </div>
            
        `).join(" ");
    }

    window.playTrailer = function(trailerUrl) {
        trailerModal.style.display = "block";
        trailerFrame.src = trailerUrl;
    };

    /*window.addToWatchlist = function(title) {
        const existingItem = Array.from(watchlistContainer.children).find(item => item.textContent.trim().startsWith(title));
        if (!existingItem) {
            const watchlistItem = document.createElement("li");
            watchlistItem.innerHTML = `${title} <button onclick="removeFromWatchlist(this)">Remove</button>`;
            watchlistContainer.appendChild(watchlistItem);
        }
    };

    window.removeFromWatchlist = function(button) {
        const item = button.parentElement;
        watchlistContainer.removeChild(item);
    };*/
    window.addToWatchlist = function(title,image) {
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        if (!watchlist.some(movie => movie.title === title)) {
            watchlist.push({ title,image });
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            loadWatchlist(); // To reflect changes on the current page's watchlist section
        }
    };
    
    window.removeFromWatchlist = function(button) {
        const title = button.parentElement.textContent.trim().replace(' Remove', '');
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        watchlist = watchlist.filter(movie => movie.title !== title);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        loadWatchlist(); // To reflect changes on the current page's watchlist section
    };
    

   /* searchButton.addEventListener("click", () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchText)
        );
        displayMovies(filteredMovies);
    });  */
    function handleSearch() {
        const searchText = searchInput.value.toLowerCase();
        const theme = themeFilter.value;
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
    
    if (theme !== "all") {
        filteredMovies = filteredMovies.filter(movie => movie.theme.toLowerCase().includes(theme));
    }

    displayMovies(filteredMovies);
}
    
    // Event listener for button click
    searchButton.addEventListener('click', handleSearch);
    
    // Event listener for Enter key press
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    themeFilter.addEventListener('change', handleSearch);
    modalClose.addEventListener("click", () => {
        trailerModal.style.display = "none";
        trailerFrame.src = "";
    });

    window.onclick = function(event) {
        if (event.target === trailerModal) {
            trailerModal.style.display = "none";
            trailerFrame.src = "";
        }
    };
    function loadWatchlist() {
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        watchlistContainer.innerHTML = watchlist.map(movie => `
            <li>
                <img src="${movie.image}" alt="${movie.title}" style="width: 50px; height: auto;">
                ${movie.title}
                <button onclick="removeFromWatchlist(this)">Remove</button>
            </li>
        `).join("");
    }
    
    // Load the watchlist from local storage on page load
    window.addEventListener('load', loadWatchlist);
    // Initial display of movies
    displayMovies();
});