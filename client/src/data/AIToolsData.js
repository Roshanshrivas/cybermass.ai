
const toolsData = [
    {
        id: "1",
        price: "Free",
        title: "Chat GPT-5",
        tag: "#Featured #Chatgpt5 #AI #OpenAi",
        description: "ChatGPT-5 is the next generation of OpenAI's language model, and is expected to be a significant advancement in the field of AI",
        button: "Try Now",
        image: "https://www.edigitalagency.com.au/wp-content/uploads/ChatGPT-logo-PNG-medium-size-white-green-background.png",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22HQuT2A8WeH_yEI2MqecpD%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-10T04%3A43%3A24.418Z%22"
    },
    {
        id: "2",
        price: "Paid",
        title: "ChatGpt-4",
        tag: "#Featured #Chatgpt4 #AI #OpenAi",
        description: "ChatGPT is an advanced AI-powered language model developed by OpenAI, part of the GPT (Generative Pre-Trained Transformer) family.",
        button: "Try Now",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI2ktlzUAsWITIW0fjtbz3aq2ifYd-ruR8A&s",
        link:"/"
    },
    {
        id: "3",
        price: "Free",
        title: "MidJourney",
        tag: "#ImageGenerator",
        description: "MidJourney is an AI-based image generation tool that transforms text into visual art.",
        button: "Try Now",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnIOIkuxZpMLh82GyfJsiJ1howQX46HNCIA&s",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22CnnZ9CG8N3D3GB6VPOqLT%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-10T07%3A19%3A51.128Z%22"
    },
    {
        id: "4",
        price: "Paid",
        title: "DALL-E 3",
        tag: "#AI #Image",
        description: "DALL-E 3 Prompt Craft is an innovative game designed to assist users in generating high-quality prompts for creating top-notch images using DALL-E 3.",
        button: "Try Now",
        image: "https://cdn.prod.website-files.com/64f2fa44b0818c378b17052e/65c4e3a0951283b0c2355eb1_20240208T0220-0ee7f525-bc24-4a72-a6c4-b287ba72893e.png",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%220sjZ474Abk0zOgLKeH2GL%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-10T07%3A24%3A28.173Z%22"
    },
    {
        id: "5",
        price: "Free",
        title: "PowerPoint presentation GPT",
        tag: "#GPT #AI",
        description: "PresentationGPT is essentially ChatGPT for presentations. It helps users to effortlessly create high-quality, engaging, and detailed presentations.",
        button: "Try Now",
        image: "https://cdn.slidesharecdn.com/ss_thumbnails/chatgptppt-230706152155-7388e2cc-thumbnail.jpg?width=640&height=640&fit=bounds",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%220d48705b-9c68-4878-852a-241f2aa123af%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-10T07%3A28%3A26.122Z%22"
    },
    {
        id: "6",
        price: "Free",
        title: "Human Written 100% Unique SEO Optimized Article",
        tag: "Audio Generator",
        description: "Human Written, Plagiarism Free and SEO Optimized Long-Form Article With Proper Outline.",
        button: "Try Now",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRXtf4WXNWRhPbeEyDU1YRrYtX-c85Tz3Tw&s",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22db284584-e75e-4b01-827a-d7b2acc963bc%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-10T07%3A32%3A59.798Z%22"
    },
    {
        id: "7",
        price: "Paid",
        title: "Lumen5",
        tag: "Video Generator",
        description: "Lumen5 transforms blog posts and articles into engaging videos with minimal effort.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "8",
        price: "Free",
        title: "Grammarly",
        tag: "Writing Assistant",
        description: "Grammarly helps users improve their writing by offering grammar and style suggestions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "9",
        price: "Paid",
        title: "DeepL",
        tag: "Translator",
        description: "DeepL provides high-quality translations with a focus on accuracy and nuance.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "10",
        price: "Free",
        title: "Scribe",
        tag: "Document Generator",
        description: "Scribe automatically generates detailed documentation based on your actions and notes.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "11",
        price: "Free",
        title: "HackGPT",
        tag: "Presentation Generator",
        description: "Tome uses AI to help you create compelling and visually appealing presentations in minutes.",
        button: "Try Now",
        image: "https://r2.erweima.ai/i/4keTa0iwQiK4-njISD696Q.png",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22hBKgewmwO3MSSBLPn96wY%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-18T08%3A48%3A23.633Z%22"
    },
    {
        id: "12",
        price: "Paid",
        title: "CODING GENERATOR Pro",
        tag: "Video Editor",
        description: "Pictory is a video editing tool that uses AI to simplify the process of creating professional videos.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22bKWDj-KFuymuAwaSyEl1D%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-18T08%3A50%3A00.054Z%22"
    },
    {
        id: "13",
        price: "Free",
        title: "AIDeveloper",
        tag: "Productivity",
        description: "Notion AI enhances your productivity by automating tasks and providing intelligent suggestions.",
        button: "Try Now",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8HWtKg0wDj_bEEndLuGWAOw5QMlzyeEQPA&s",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22kKj7csVt0lgGrWEC4cxfW%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-18T08%3A51%3A13.384Z%22"
    },
    {
        id: "14",
        price: "Paid",
        title: "Python code generator",
        tag: "Creative",
        description: "Runway ML is an AI-powered creative suite for artists and designers to bring their ideas to life.",
        button: "Try Now",
        image: "https://r2.erweima.ai/i/237YYTL0RpSG1CCd2RtNKQ.png",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%228r4OfqQdSiQ7rp3TQ7pRJ%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-18T08%3A52%3A16.519Z%22"
    },
    {
        id: "15",
        price: "Free",
        title: "FlowGPT",
        tag: "Design",
        description: "Canva AI assists in creating stunning graphics and designs effortlessly, with AI-driven tools.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"https://gptcall.net/chat?data=%7B%22contact%22%3A%7B%22id%22%3A%22PnlGg0ijgYk--a-_E1EV9%22%2C%22flow%22%3Atrue%7D%7D#chatID=%222024-09-18T09%3A00%3A03.507Z%22"
    },
    {
        id: "16",
        price: "Paid",
        title: "Descript",
        tag: "Audio/Video Editor",
        description: "Descript is a media editing tool that transcribes, edits, and creates content with ease.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "17",
        price: "Free",
        title: "Replika",
        tag: "Chatbot",
        description: "Replika is an AI chatbot that engages users in meaningful conversations and offers companionship.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "18",
        price: "Paid",
        title: "Hotpot.ai",
        tag: "Design",
        description: "Hotpot.ai offers a range of AI tools for creating stunning graphics, images, and more.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "19",
        price: "Free",
        title: "AI Dungeon",
        tag: "Game",
        description: "AI Dungeon is an AI-powered text-based adventure game where you create your own story.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "20",
        price: "Paid",
        title: "Artbreeder",
        tag: "Image Generator",
        description: "Artbreeder is an AI-based tool that allows users to create and explore unique images through collaboration.",
        button: "Try Now",
        image: "https://picsum.photos/200/300",
        link:"/"
    },
    {
        id: "21",
        price: "Free",
        title: "Rasa",
        tag: "Chatbot Framework",
        description: "Rasa is an open-source framework for building custom AI chatbots with advanced conversational abilities.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "22",
        price: "Paid",
        title: "Synthesys",
        tag: "Voice Over",
        description: "Synthesys generates high-quality voiceovers for videos, presentations, and more using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "23",
        price: "Free",
        title: "Riffusion",
        tag: "Music Generator",
        description: "Riffusion generates AI-driven music loops and tracks based on your inputs.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "24",
        price: "Paid",
        title: "BigML",
        tag: "Machine Learning",
        description: "BigML provides an easy-to-use interface for building and deploying machine learning models.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "25",
        price: "Free",
        title: "DataRobot",
        tag: "Machine Learning",
        description: "DataRobot automates the process of building and deploying machine learning models.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "26",
        price: "Paid",
        title: "AI Writer",
        tag: "Writing Assistant",
        description: "AI Writer generates high-quality content for blogs, articles, and more with minimal input.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "27",
        price: "Free",
        title: "Rytr",
        tag: "Content Creation",
        description: "Rytr helps you write engaging content faster with AI-driven tools and suggestions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "28",
        price: "Paid",
        title: "QuillBot",
        tag: "Writing Assistant",
        description: "QuillBot enhances your writing with AI-driven paraphrasing and grammar-checking tools.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "29",
        price: "Free",
        title: "Wordtune",
        tag: "Writing Assistant",
        description: "Wordtune helps you rewrite and improve your text with AI-driven suggestions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "30",
        price: "Paid",
        title: "Phrasee",
        tag: "Marketing",
        description: "Phrasee uses AI to generate marketing copy that resonates with your audience.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "31",
        price: "Free",
        title: "MidJourney",
        tag: "Image Generator",
        description: "MidJourney is an AI-based image generation tool that transforms text into visual art.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "32",
        price: "Paid",
        title: "NightCafe Creator",
        tag: "Art Generator",
        description: "NightCafe Creator uses AI to create stunning artworks based on text descriptions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "33",
        price: "Free",
        title: "AIVA",
        tag: "Music Composer",
        description: "AIVA is an AI composer that creates unique music tracks for various purposes.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "34",
        price: "Paid",
        title: "Play.ht",
        tag: "Text to Speech",
        description: "Play.ht converts text into realistic voiceovers using AI-driven text-to-speech technology.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "35",
        price: "Free",
        title: "Runway Gen-1",
        tag: "Video Generator",
        description: "Runway Gen-1 creates video content from text and images using advanced AI algorithms.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "36",
        price: "Paid",
        title: "InVideo",
        tag: "Video Editor",
        description: "InVideo is an AI-powered video editor that simplifies the process of creating professional videos.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "37",
        price: "Free",
        title: "Lobe",
        tag: "Machine Learning",
        description: "Lobe is an easy-to-use tool for training custom machine learning models without any coding experience.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "38",
        price: "Paid",
        title: "Tars",
        tag: "Chatbot",
        description: "Tars is an AI-driven chatbot platform that helps businesses automate customer interactions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "39",
        price: "Free",
        title: "Dialogflow",
        tag: "Chatbot Framework",
        description: "Dialogflow is a Google-powered AI tool for building conversational agents and chatbots.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "40",
        price: "Paid",
        title: "Surfer SEO",
        tag: "SEO",
        description: "Surfer SEO uses AI to help optimize content for better search engine rankings.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "41",
        price: "Free",
        title: "Frase",
        tag: "Content Creation",
        description: "Frase is an AI tool that helps you research, write, and optimize content quickly.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "42",
        price: "Paid",
        title: "Conversion.ai",
        tag: "Marketing",
        description: "Conversion.ai generates persuasive marketing copy for various platforms using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "43",
        price: "Free",
        title: "AI Image Enlarger",
        tag: "Image Enhancement",
        description: "AI Image Enlarger upscales images without losing quality using AI algorithms.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "44",
        price: "Paid",
        title: "Let's Enhance",
        tag: "Image Enhancement",
        description: "Let's Enhance improves image quality by enhancing resolution, sharpness, and colors using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "45",
        price: "Free",
        title: "Remove.bg",
        tag: "Image Editor",
        description: "Remove.bg uses AI to remove backgrounds from images with a single click.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "46",
        price: "Paid",
        title: "Deep Dream Generator",
        tag: "Art Generator",
        description: "Deep Dream Generator creates surreal images using neural network-based AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "47",
        price: "Free",
        title: "AI Painter",
        tag: "Art Generator",
        description: "AI Painter turns your sketches into detailed artworks using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "48",
        price: "Paid",
        title: "Fotor",
        tag: "Image Editor",
        description: "Fotor is an AI-powered photo editing tool with advanced features for enhancing images.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "49",
        price: "Free",
        title: "BeFunky",
        tag: "Photo Editor",
        description: "BeFunky offers AI-driven photo editing tools for creating stunning images.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "50",
        price: "Paid",
        title: "Snappa",
        tag: "Design",
        description: "Snappa helps you create graphics and designs for social media, ads, and more using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "51",
        price: "Free",
        title: "Pixlr",
        tag: "Photo Editor",
        description: "Pixlr is a free, AI-powered online photo editor with advanced editing features.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "52",
        price: "Paid",
        title: "Designhill AI Logo Maker",
        tag: "Logo Generator",
        description: "Designhill's AI Logo Maker helps you create professional logos in minutes.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "53",
        price: "Free",
        title: "Looka",
        tag: "Logo Generator",
        description: "Looka uses AI to help you design stunning logos with ease.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "54",
        price: "Paid",
        title: "LogoMakr",
        tag: "Logo Generator",
        description: "LogoMakr is an AI tool for creating high-quality logos for businesses and projects.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "55",
        price: "Free",
        title: "Wix Logo Maker",
        tag: "Logo Generator",
        description: "Wix Logo Maker uses AI to help you design unique logos that represent your brand.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "56",
        price: "Paid",
        title: "LogoGarden",
        tag: "Logo Generator",
        description: "LogoGarden is an AI tool for creating logos, business cards, and other branding materials.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "57",
        price: "Free",
        title: "Hatchful",
        tag: "Logo Generator",
        description: "Hatchful by Shopify helps you create beautiful logos in just a few clicks using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "58",
        price: "Paid",
        title: "Logojoy",
        tag: "Logo Generator",
        description: "Logojoy is an AI-powered logo maker that provides you with high-quality logos instantly.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "59",
        price: "Free",
        title: "Canva",
        tag: "Design",
        description: "Canva is a popular design tool that uses AI to help you create stunning visuals for any purpose.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "60",
        price: "Paid",
        title: "RelayThat",
        tag: "Design",
        description: "RelayThat is an AI tool that helps you create consistent and branded designs across platforms.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "61",
        price: "Free",
        title: "Crello",
        tag: "Design",
        description: "Crello is an AI-powered design tool for creating social media graphics, ads, and more.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "62",
        price: "Paid",
        title: "Stencil",
        tag: "Design",
        description: "Stencil is an AI-driven design tool that makes creating visuals for social media and ads easy.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "63",
        price: "Free",
        title: "Piktochart",
        tag: "Infographic Maker",
        description: "Piktochart helps you create beautiful infographics and visual content with AI assistance.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "64",
        price: "Paid",
        title: "Visme",
        tag: "Presentation Maker",
        description: "Visme uses AI to help you create stunning presentations and visual content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "65",
        price: "Free",
        title: "Beautiful.ai",
        tag: "Presentation Maker",
        description: "Beautiful.ai is an AI-powered tool that helps you create visually appealing presentations.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "66",
        price: "Paid",
        title: "Slidesgo",
        tag: "Presentation Maker",
        description: "Slidesgo provides AI-generated templates for creating stunning presentations.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "67",
        price: "Free",
        title: "Slidebean",
        tag: "Presentation Maker",
        description: "Slidebean uses AI to design professional presentations based on your content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "68",
        price: "Paid",
        title: "AI Writer",
        tag: "Content Creation",
        description: "AI Writer is an AI-powered tool that helps you generate articles, blog posts, and more.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "69",
        price: "Free",
        title: "Copy.ai",
        tag: "Content Creation",
        description: "Copy.ai generates high-quality content for blogs, ads, and social media using AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "70",
        price: "Paid",
        title: "Jarvis.ai",
        tag: "Content Creation",
        description: "Jarvis.ai is an AI writing assistant that helps you create engaging content quickly.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "71",
        price: "Free",
        title: "Writesonic",
        tag: "Content Creation",
        description: "Writesonic uses AI to help you generate blog posts, ads, and product descriptions.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "72",
        price: "Paid",
        title: "ClosersCopy",
        tag: "Content Creation",
        description: "ClosersCopy uses AI to help you create persuasive copy for sales, marketing, and more.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "73",
        price: "Free",
        title: "QuillBot",
        tag: "Writing Assistant",
        description: "QuillBot is an AI-powered paraphrasing tool that helps you rewrite content effectively.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "74",
        price: "Paid",
        title: "Grammarly",
        tag: "Writing Assistant",
        description: "Grammarly uses AI to help you write clear, effective, and error-free content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "75",
        price: "Free",
        title: "ProWritingAid",
        tag: "Writing Assistant",
        description: "ProWritingAid offers AI-powered writing and editing tools to help improve your content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "76",
        price: "Paid",
        title: "Slick Write",
        tag: "Writing Assistant",
        description: "Slick Write helps you write better content by checking grammar, style, and more with AI.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "77",
        price: "Free",
        title: "Hemingway App",
        tag: "Writing Assistant",
        description: "Hemingway App uses AI to help you write clear and concise content by highlighting complex sentences.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "78",
        price: "Paid",
        title: "Outwrite",
        tag: "Writing Assistant",
        description: "Outwrite offers AI-powered writing and editing tools to help you improve your writing.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "79",
        price: "Free",
        title: "LanguageTool",
        tag: "Writing Assistant",
        description: "LanguageTool is an AI-driven grammar and style checker that helps you write better content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "80",
        price: "Paid",
        title: "Ginger",
        tag: "Writing Assistant",
        description: "Ginger uses AI to help you write better by checking grammar, spelling, and more.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "81",
        price: "Free",
        title: "Linguix",
        tag: "Writing Assistant",
        description: "Linguix offers AI-powered writing tools to help you write clear and effective content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "82",
        price: "Paid",
        title: "Scribens",
        tag: "Writing Assistant",
        description: "Scribens is an AI-driven grammar and style checker that helps you write better content.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "83",
        price: "Free",
        title: "Slick Text",
        tag: "SMS Marketing",
        description: "Slick Text uses AI to help you create effective SMS marketing campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "84",
        price: "Paid",
        title: "TextMagic",
        tag: "SMS Marketing",
        description: "TextMagic is an AI-driven SMS marketing platform that helps you send personalized messages.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "85",
        price: "Free",
        title: "Sendinblue",
        tag: "Email Marketing",
        description: "Sendinblue is an AI-powered email marketing tool that helps you create and send campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "86",
        price: "Paid",
        title: "Mailchimp",
        tag: "Email Marketing",
        description: "Mailchimp uses AI to help you create, send, and analyze email marketing campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "87",
        price: "Free",
        title: "Constant Contact",
        tag: "Email Marketing",
        description: "Constant Contact offers AI-powered tools to help you create and manage email campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "88",
        price: "Paid",
        title: "GetResponse",
        tag: "Email Marketing",
        description: "GetResponse uses AI to help you create, send, and analyze email marketing campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "89",
        price: "Free",
        title: "Benchmark Email",
        tag: "Email Marketing",
        description: "Benchmark Email offers AI-powered tools to help you create and send email campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    },
    {
        id: "90",
        price: "Paid",
        title: "AWeber",
        tag: "Email Marketing",
        description: "AWeber uses AI to help you create, send, and analyze email marketing campaigns.",
        button: "Try Now",
        image: "https://picsum.photos/200/300"
    }
];


export default toolsData;