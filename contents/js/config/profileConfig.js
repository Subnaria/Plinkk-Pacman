const profileData = {
    profileLink: "https://cscpacman.fr", // Lien du profil 
    profileImage: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/b1/05/53b105b6-7ef7-2441-bdcd-f21b3335121b/artwork.jpg/1200x630bb.jpg", // Image de profil
    profileIcon: "https://cdn-icons-png.flaticon.com/512/8633/8633238.png", // Icone derrière le profil
    profileSiteText: "Pacman Web Site", // Nom derrière le profil
    userName: "Csc.Pacman", // Nom affiché sur la page et dans le titre de l'onglet
    email: "csc.pacman@studio.klaynight.fr", // Addesse mail affichée sur la page // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/NZc5PKwkAa", text: "Wartycoon Fr", name: "Discord" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/GfFy3E6GVf", text: "Le Baudo Crew", name: "Discord" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/h4E74mZvFY", text: "The ats", name: "Discord" },
    ],
    // Fond de la page si une liste est utilisée alors le fond sera via les couleurs que vous mettez dedans
    background: ["#FF5733", "#33FF57"], //"https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    degBackgroundColor: 45, // inclinaison du degradé
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs du neon de profil
    iconUrl: "https://media.discordapp.net/attachments/1331600541599535169/1337128941546377387/ab67616d0000b273dc3e2814b407ab8912fe6094.png?ex=67a651de&is=67a5005e&hm=5e5b2e4dfc444d3f092f898e9d71e575747c260f392079000f32e0f3228b6353&=&format=webp&quality=lossless", // Icone de l'onglet
    description: "Bienvenue sur mon Plinkk J'essaye d'apprendre le web !", // Description affichée sur la page, display: none si vide
    
    labels: [
        { data: "Developer", color: "#FF6384", fontColor: "#FFFFFF" },
        { data: "Designer", color: "#36A2EB", fontColor: "#FFFFFF" },
        { data: "Engineer UI/UX", color: "#4BC0C0", fontColor: "#FFFFFF" },
    ],

        socialIcon: [
    ],
    
    neonEnable: 1, // 1 : Enable, 0 : Disable
    buttonThemeEnable: 1, // 1 : Enable, 0 : Disable

    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 6,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,              // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1,        // Délai de l'animation en secondes

    canvaEnable: 1, // 1 : Enable, 0 : Disable
    selectedCanvasIndex: 1,          // Animation du canva (voir ci-dessous)
};
//      Thèmes      \\
// 0 : Grey Theme
// 1 : Light Yellow Theme
// 2 : Green Theme
// 3 : Blue Theme
// 4 : Red Theme
// 5 : Light blue Theme
// 6 : Dark Theme
// 7 : Orange Theme
// 8 : Grey Dark Theme
// 9 : Green Grey Theme
// 10 : Very Light Blue Theme
// 11 : Brown Theme
// 12 : Purple Theme
// 13 : Pink Theme
// 14 : Neptune Theme (Light Brown Theme)

//      Animations      \\
// 0 : Fondu
// 1 : Glisser
// 2 : Zoomer
// 3 : Rotation
// 4 : Rebondir
// 5 : Secouer
// 6 : Retourner
// 7 : Pulsation
// 8 : Balancer
// 9 : Se balancer
// 10 : Clignoter
// 11 : Bande de caoutchouc
// 12 : Tada
// 13 : Gélatineux
// 14 : Battement de coeur
// 15 : Vitesse de la lumière
// 16 : Rouler
// 17 : Charnière

//      Canva Animations      \\
// 0 : Bubble
// 1 : Neuronal
// 2 : Particule
// 3 : Stars Array
// 4 : Snow 
// 5 : Galaxy
// 6 : Hexagone
// 7 : Confetti
// 8 : Fireworks
// 9 : Boom CLick
// 10 : Crowd
// 11 : Storm
// 12 : Color Wars
// 13 : Liquid Light
// 14 : Rain
// 15 : Matrix
// 16 : Purple Tree
// 17 : Cloud
// 18 : Space

// Icons SVG list
// 1. Apple Podcasts
// 2. Apple Podcasts Alt
// 3. Bandcamp
// 4. Behance
// 5. Bluesky
// 6. Bluesky Alt
// 7. Buy Me a Coffee
// 8. Cal.com
// 9. Calendly
// 10. Cash App
// 11. dev.to
// 12. Discogs
// 13. Discogs Alt
// 14. Discord
// 15. Dribbble
// 16. Etsy
// 17. Facebook
// 18. Facebook Messenger
// 19. Figma
// 20. Fiverr
// 21. Flickr
// 22. GitHub
// 23. GitLab
// 24. GoFundMe
// 25. Goodreads
// 26. Google Black
// 27. Google Play Store
// 28. Google Scholar
// 29. Hashnode
// 30. Instagram
// 31. Kick
// 32. Kick Alt
// 33. Kickstarter
// 34. Kit
// 35. Ko-fi
// 36. Last.fm
// 37. Letterboxd
// 38. Line
// 39. LinkedIn
// 40. Mailchimp
// 41. Mastodon
// 42. Medium
// 43. Microsoft
// 44. Notion
// 45. Obsidian
// 46. OnlyFans
// 47. Patreon
// 48. PayPal
// 49. Pinterest
// 50. Product Hunt
// 51. Read.cv
// 52. Reddit
// 53. Shop
// 54. Signal
// 55. Slack
// 56. Snapchat
// 57. SoundCloud
// 58. Spotify
// 59. Spotify Alt
// 60. Square
// 61. Stack Overflow
// 62. Steam
// 63. Steam Alt
// 64. Strava
// 65. Substack
// 66. Telegram
// 67. Threads
// 68. Threema
// 69. TikTok
// 70. Trello
// 71. Tumblr
// 72. Twitch
// 73. Unsplash
// 74. Venmo
// 75. Vimeo
// 76. VSCO
// 77. WhatsApp
// 78. WordPress
// 79. X
// 80. YouTube
// 81. YouTube Alt
// 82. Zoom
// 83. Airbnb
// 84. Amazon
// 85. Android
// 86. Angellist
// 87. Apple
// 88. Audible
// 89. Blogger
// 90. Codepen
// 91. Deezer
// 92. Deviantart
// 93. Dropbox
// 94. eBay
// 95. Evernote
// 96. Goodreads
// 97. IMDb
// 98. Kickstarter
// 99. Line
// 100. Medium
// 101. Meetup
// 102. Mixcloud
// 103. Myspace
// 104. Periscope
// 105. Pocket
// 106. Quora
// 107. Ravelry
// 108. Reddit
// 109. Skype
// 110. Slideshare
// 111. Soundcloud
// 112. Spotify
// 113. Stack Exchange
