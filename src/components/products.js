import iphone1 from '@/assets/iphone1.jpg'
import iphone2 from '@/assets/iphone2.jpg'
import iphone3 from '@/assets/iphone3.jpg'
import watch1 from '@/assets/watch1.jpg'
import watch2 from '@/assets/watch2.jpg'
import watch3 from '@/assets/watch3.jpg'
import mac1 from '@/assets/mac1.jpg'
import mac2 from '@/assets/mac2.jpg'
import mac3 from '@/assets/mac3.jpg'
import iPad1 from '@/assets/iPad1.jpg'
import iPad2 from '@/assets/iPad2.jpg'
import iPad3 from '@/assets/iPad3.jpg'
import air1 from '@/assets/air1.webp'
import air2 from '@/assets/air2.jpg'
import air3 from '@/assets/air3.jpg'

export const products={
    iPhones:[
      {
        id : 'apple-2',
        name : 'Apple iPhone 14 Pro (512 GB) - Silver',
        image : iphone2,
        off : '1,59,900',
        mrp  :  '1,79,000',
        about:
          [
            '15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion',
            'Dynamic Island, a magical new way to interact with iPhone',
            '48MP Main camera for up to 4x greater resolution',
            'Cinematic mode now in 4K Dolby Vision up to 30 fps',
            'Action mode for smooth, steady, handheld videos',
            'All-day battery life and up to 23 hours of video playback',
            'Vital safety technology — Crash Detection calls for help when you can’t',
            'A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular'
          ]
      },
      {
        id:'apple-1',
        name : 'Apple iPhone 13 (128GB) - Starlight',
        image : iphone1,
        off : '55,999',
        mrp : '79,900',
        about:
          [
            '15 cm (6.1-inch) Super Retina XDR display',
            'Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
            'Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording',
            '12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
            'A15 Bionic chip for lightning-fast performance'
          ]
        
      },
      {
        id : 'apple-3',
        name : 'Apple iPhone 14 (128 GB) - Blue',
        image : iphone3,
        off : '65,999',
        mrp  :  '79,900' ,
        about:
          [
            '15.40 cm (6.1-inch) Super Retina XDR display',
            'Advanced camera system for better photos in any light',
            'Cinematic mode now in 4K Dolby Vision up to 30 fps',
            'Action mode for smooth, steady, handheld videos',
            'Vital safety technology — Crash Detection calls for help when you can’t',
            'Industry-leading durability features with Ceramic Shield and water resistance'
          ]
      }
    ],
    Watches:[
      {
        id : 'watch-1',
        name : 'Apple Watch Ultra [GPS + Cellular 49 mm] smart watch w/Rugged Titanium Case & Orange Alpine Loop - Small. Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display',
        image : watch1,
        off : '82,999',
        mrp : '89,900',
        about:
          [
            'WHY APPLE WATCH ULTRA — Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers and water sports enthusiasts — with a specialised strap for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe and connected.',
            'EXTREMELY RUGGED, INCREDIBLY CAPABLE — 49-millimetre corrosion-resistant titanium case. Larger Digital Crown and more accessible buttons. 100-metre water resistance. Customisable Action button for instant physical control over a variety of functions',
            'BIGGEST, BRIGHTEST DISPLAY YET— A bright Always-On Retina display that’s easy to see, even in direct sunlight. More room for adding complications to customise your watch face',
            'FOR ENDURANCE ATHLETES — Advanced metrics in the Workout app, including Heart Rate Zones and Running Form. Precision dual-frequency GPS for accuracy, distance, route and pace calculations. Trail Loop band is thin, light and flexible, designed especially for runners.',
            'FOR OUTDOOR ADVENTURERS — Redesigned Compass app delivers all-new views and functionality. Mark your location with Compass Waypoints. Backtrack uses GPS to map where you’ve been so you can retrace your steps. Alpine Loop band is extremely rugged and secure to meet the needs of hikers and climbers.'
          ]
      },
      {
        id : 'watch-2',
        name : 'Apple Watch Series 8 [GPS 45 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant',
        image : watch2,
        off : '42,999',
        mrp  :  '48,900' ,
        about:
          [
            'WHY APPLE WATCH SERIES 8 — Your essential companion for a healthy life is now even more powerful. Advanced sensors provide insights to help you better understand your health. New safety features can get you help when you need it. The bright, Always-On Retina display is easy to read, even when your wrist is down.',
            'EASILY CUSTOMISABLE — Available in a range of sizes and materials, with dozens of straps to choose from and watch faces with complications tailored to whatever you’re into',
            'INNOVATIVE SAFETY FEATURES — Crash Detection and Fall Detection can automatically connect you with emergency services in the event of a severe car crash or a hard fall. And Emergency SOS provides urgent assistance with the press of a button.',
            'ADVANCED HEALTH FEATURES — Temperature sensing is a breakthrough feature that provides deep insights into women’s health. Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular rhythm. And see how much time you spent in REM, Core or Deep sleep with sleep stages.',
            'SIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. Unlock your Mac automatically. Find your devices with a tap. Apple Watch requires an iPhone 8 or later with the latest iOS version.'
          ]
      },
      {
        id : 'watch-3',
        name : 'Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        image : watch3,
        off : '29,900',
        mrp  :  '32,499' ,
        about:
          [
            'WHY APPLE WATCH SE — All the essentials to help you monitor your fitness, keep connected, track your health and stay safe. Now up to 20% faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.',
            'EASILY CUSTOMISABLE — Available in a range of sizes and colours, with dozens of straps to choose from and watch faces with complications tailored to whatever you’re into.',
            'HEALTH AND SAFETY FEATURES — Get help when you need it with Crash Detection, Fall Detection and Emergency SOS. Get deep insights into your health, including notifications if you have an irregular rhythm or an unusually high or low heart rate.',
            'SIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. Unlock your Mac automatically. Find your devices with a tap. Apple Watch requires an iPhone 8 or later with the latest iOS version.',
            'SWIMPROOF AND STYLISH — Water resistant to 50 metres. Three finishes. And a redesigned, colour-matched back case made with a new production process that reduces its carbon emissions by over 80%.'
          ]
      }
    ],
    MacBook:[
      {
        id : 'mac-1',
        name : 'Apple 2023 MacBook Air (15-inch, M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 256GB) - Midnight',
        image : mac1,
        off : '1,26,990',
        mrp : '1,34,900',
        about:
          [
            'IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100% recycled aluminium enclosure is strikingly thin and light.',
            'SUPERCHARGED BY M2 — Get more done faster with a powerful 8-core CPU, 10-core GPU and up to 24GB of unified memory.',
            'UP TO 18 HOURS OF BATTERY LIFE — Go all day with the power-efficient performance of the Apple M2 chip. (Battery life varies by use and configuration. See our website for more information.)',
            'SPACIOUS, BEAUTIFUL DISPLAY — The high-resolution, 38.91-centimetre (15.3-inch) Liquid Retina display features 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail. (The display on the 15-inch MacBook Air has rounded corners at the top. When measured as a standard rectangular shape, the screen is 38.91 centimetres (15.3 inches) diagonally (actual viewable area is less.)',
            'SILENT DESIGN — MacBook Air features a fanless design that runs completely silent, no matter the task.'
          ]
      },
      {
        id : 'mac-2',
        name : 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey',
        image : mac2,
        off : '1,06,990',
        mrp  :  '1,19,990',
        about:
          [
            'STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.',
            'SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory. ',
            'UP TO 18 HOURS OF BATTERY LIFE – Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.',
            'BIG, BEAUTIFUL DISPLAY – The 34.46-centimetre (13.6-inch) Liquid Retina display features over 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail.',
            'ADVANCED CAMERA AND AUDIO – Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio.',
            'VERSATILE CONNECTIVITY – MacBook Air features a MagSafe charging port, two Thunderbolt ports and a headphone jack.',
            'EASY TO USE – Your Mac feels familiar from the moment you turn it on and works seamlessly with all your Apple devices.'
          ] 
      },
      {
        id : 'mac-3',
        name : 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight',
        image : mac3,
        off : '1,07,990',
        mrp  :  '1,19,900' ,
        about:
          [
            'STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.',
            'SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.',
            'UP TO 18 HOURS OF BATTERY LIFE – Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.',
            'BIG, BEAUTIFUL DISPLAY – The 34.46-centimetre (13.6-inch) Liquid Retina display features over 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail.',
            'ADVANCED CAMERA AND AUDIO – Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio.',
            'VERSATILE CONNECTIVITY – MacBook Air features a MagSafe charging port, two Thunderbolt ports and a headphone jack.',
            'EASY TO USE – Your Mac feels familiar from the moment you turn it on and works seamlessly with all your Apple devices.'
          ]
      }
    ],
    iPad:[
      {
        id : 'ipad-1',
        name : 'Apple 2022 10.9-inch iPad (Wi-Fi, 256GB) - Silver (10th Generation)',
        image : iPad1,
        off : '57,490',
        mrp : '59,900',
        about:
          [
            'Striking 10.9-inch Liquid Retina display with True Tone',
            'A14 Bionic chip with 6-core CPU and 4-core GPU',
            '12MP Wide back camera',
            'Landscape 12MP Ultra Wide front camera with Center Stage',
            'Touch ID for secure authentication and Apple Pay'
          ]
      },
      {
        id : 'ipad-2',
        name : 'Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)',
        image : iPad2,
        off : '53,999',
        mrp  :  '59,900' ,
        about:
          [
            '27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating',
            'Apple M1 chip with Neural Engine',
            '12MP Wide camera',
            '12MP Ultra Wide front camera with Center Stage',
            'Up to 256GB of storage',
            'Available in blue, purple, pink, starlight, and space gray',
            'Stereo landscape speakers'
          ]
      },
      {
        id : 'ipad-3',
        name : 'Apple 2021 iPad Mini with A15 Bionic chip (Wi-Fi, 256GB) - Space Grey (6th Generation)',
        image : iPad3,
        off : '52,950',
        mrp  :  '64,900' ,
        about:
          [
            'A15 Bionic chip with Neural Engine',
            '21.08 cm (8.3-inch) Liquid Retina display with True Tone and wide colour',
            'A15 Bionic chip with Neural Engine',
            '12MP Wide back camera, 12MP Ultra Wide front camera with Centre Stage',
            'Available in purple, starlight, pink and space grey'
          ]
      }
    ],
    AirPods:[
      {
        id :  'airpods-1',
        name : 'Apple AirPods (2nd Generation)',
        image : air1,
        off : '10,990',
        mrp : '14,900',
        about:
          [
            'Automatically on, automatically connected',
            'Easy setup for all your Apple devices',
            'Quick access to Siri by saying “Hey Siri”',
            'Double-tap to play or skip forward',
            'New Apple H1 headphone chip delivers faster wireless connection to your devices',
            'Charges quickly in the case'
          ]
      },
      {
        id :  'airpods-2',
        name : 'Apple AirPods (3rd Generation)',
        image : air2,
        off : '18,499',
        mrp  :  '20,900' ,
        about:
          [
            'Spatial audio with dynamic head tracking places sound all around you',
            'Adaptive EQ automatically tunes music to your ears',
            'All-new contoured design',
            'Force sensor lets you easily control your entertainment, answer or end calls, and more',
            'Sweat and water resistant'
          ]
      },
      {
        id :  'airpods-3',
        name : 'Apple AirPods (3rd Generation) with Lightning Charging Case ​​​​​​​',
        image : air3,
        off : '19,100 ',
        mrp  :  '19,900' ,
        about:
          [
            'Spatial audio with dynamic head tracking places sound all around you',
            'Adaptive EQ automatically tunes music to your ears',
            'All-new contoured design',
            'Force sensor lets you easily control your entertainment, answer or end calls, and more',
            
          ]
      }
    ]
  }