var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-enter-1-and-street",
      "name": "1. Enter #1 and street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.338317780940587,
          "pitch": 0.18742495288513084,
          "rotation": 0,
          "target": "1-2-first-room"
        },
        {
          "yaw": 2.610875496367269,
          "pitch": 0.15680951947797617,
          "rotation": 0,
          "target": "11-12-enter-2-and-street-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.349076847871915,
          "pitch": -0.1595403617887623,
          "title": "Enter #1",
          "text": "Text"
        },
        {
          "yaw": 2.1552002521740103,
          "pitch": -0.3484847763143808,
          "title": "Commercial Space",
          "text": "A spacious commercial space is located on the first floor of a residential and commercial building in the center of Bar, in an attractive location with easy access. The area of the space is 216 m², making it ideal for various types of businesses, including offices, catering, or retail. The space is ready for use and is perfect for starting your project."
        }
      ]
    },
    {
      "id": "1-2-first-room",
      "name": "2. First Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.105845712711716,
          "pitch": 0.27549746989869917,
          "rotation": 0,
          "target": "2-3-enter-to-2nd-room"
        },
        {
          "yaw": -2.2325241684999604,
          "pitch": 0.37222060984489325,
          "rotation": 0,
          "target": "10-11-orridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-enter-to-2nd-room",
      "name": "3. Enter to 2nd room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.42637389294284134,
          "pitch": 0.2909281344505015,
          "rotation": 0,
          "target": "3-4-2nd-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-2nd-room",
      "name": "4. 2nd Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3970737724648323,
          "pitch": 0.42127344123941945,
          "rotation": 0,
          "target": "10-11-orridor"
        },
        {
          "yaw": 2.6707901276718147,
          "pitch": 0.41759521079964657,
          "rotation": 0,
          "target": "4-5-enter-to-main-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5-enter-to-main-space",
      "name": "5. Enter to main space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9155929094622479,
          "pitch": 0.3189625328179737,
          "rotation": 0,
          "target": "2-3-enter-to-2nd-room"
        },
        {
          "yaw": -2.5957451207287843,
          "pitch": 0.5752852843138445,
          "rotation": 0,
          "target": "5-6-main-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6-main-space",
      "name": "6. Main space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.499921694430663,
          "pitch": 0.41281348189173883,
          "rotation": 0,
          "target": "6-7-main-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7-main-space",
      "name": "7. Main space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.653928076634191,
          "pitch": 0.4022660394419706,
          "rotation": 4.71238898038469,
          "target": "10-11-orridor"
        },
        {
          "yaw": -1.6535142438768364,
          "pitch": 0.22112048422950892,
          "rotation": 11.780972450961727,
          "target": "5-6-main-space"
        },
        {
          "yaw": -0.9168307709982955,
          "pitch": 0.43673779469675367,
          "rotation": 7.853981633974483,
          "target": "7-8-veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8-veranda",
      "name": "8. Veranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2029517599362869,
          "pitch": 0.22208208172697397,
          "rotation": 0.7853981633974483,
          "target": "8-9-enter-to-the-kitchen"
        },
        {
          "yaw": 2.8552798339188774,
          "pitch": 0.4056514426685869,
          "rotation": 5.497787143782138,
          "target": "6-7-main-space"
        },
        {
          "yaw": -3.0821442519531033,
          "pitch": 0.025712210966919002,
          "rotation": 10.995574287564278,
          "target": "11-12-enter-2-and-street-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9-enter-to-the-kitchen",
      "name": "9. Enter to the kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24327051928333354,
          "pitch": 0.36438879979006344,
          "rotation": 0,
          "target": "9-10-kithen"
        },
        {
          "yaw": 1.4105365467357984,
          "pitch": 0.18960606651601708,
          "rotation": 5.497787143782138,
          "target": "7-8-veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10-kithen",
      "name": "10. Kithen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26883541438299297,
          "pitch": 0.5431814491510814,
          "rotation": 0,
          "target": "8-9-enter-to-the-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11-orridor",
      "name": "11. Сorridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8430545518762678,
          "pitch": 0.3336349467287505,
          "rotation": 0.7853981633974483,
          "target": "4-5-enter-to-main-space"
        },
        {
          "yaw": -1.420369419987118,
          "pitch": 0.4295124116500304,
          "rotation": 5.497787143782138,
          "target": "3-4-2nd-room"
        },
        {
          "yaw": 0.1448807259210927,
          "pitch": 0.26043671541453506,
          "rotation": 0,
          "target": "5-6-main-space"
        },
        {
          "yaw": -2.9257375071318794,
          "pitch": 0.2676933604831291,
          "rotation": 0,
          "target": "1-2-first-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12-enter-2-and-street-view",
      "name": "12. Enter #2 and street view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4774057803658742,
          "pitch": 0.4232186905001676,
          "rotation": 0,
          "target": "7-8-veranda"
        },
        {
          "yaw": -2.886906620009789,
          "pitch": 0.12598882570865655,
          "rotation": 6.283185307179586,
          "target": "0-1-enter-1-and-street"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.907819643408116,
          "pitch": -0.045684234535599444,
          "title": "Enter to Veranda",
          "text": "Text"
        },
        {
          "yaw": -2.654375225198514,
          "pitch": -0.29249561993780304,
          "title": "Commercial space",
          "text": "A spacious commercial space is located on the first floor of a residential and commercial building in the center of Bar, in an attractive location with easy access. The area of the space is 216 m², making it ideal for various types of businesses, including offices, catering, or retail. The space is ready for use and is perfect for starting your project."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
