// ==UserScript==
// @name         Derpibooru Legible Tooltips
// @description  formats the tooltip to be more readable
// @include      https://derpibooru.org/*
// @include      https://twibooru.org/*
// @include      https://furbooru.org/*
// @require      https://raw.githubusercontent.com/KATC14/useful/master/useful_things.js
// @require      https://momentjs.com/downloads/moment.js
// @author       - KATC14
// ==/UserScript==

function start() {
  var tagarray   = []
  var artarray   = []
  var editarray  = []
  var ocarray    = []
  var element    = document.querySelectorAll('.media-box');
  var cannonnames = ["Twilight Sparkle", "Applejack", "Fluttershy", "Rarity", "Pinkie Pie", "Rainbow Dash", "Spike", "Apple Bloom", "Scootaloo", "Sweetie Belle", "Babs Seed", "Gabby", "Princess Celestia", "Daybreaker", 
                     "Princess Luna", "Nightmare Moon", "Prince Blueblood", "Shining Armor", "Princess Cadance", "Prince Rutherford", "Flurry Heart", "Princess Ember", "Thorax", "Princess Skystar", "Queen Novo", 
                     "Princess Amore", "Granny Smith", "Big Macintosh", "Braeburn", "Aunt", "Uncle Orange", "Hayseed Turnip Truck", "Apple Strudel", "Auntie Applesauce", "Apple Rose", "Goldie Delicious", "Bright Mac", 
                     "Pear Butter", "Limestone Pie", "Marble Pie", "Igneous Rock Pie", "Cloudy Quartz", "Maud Pie", "Mr. Shy", "Mrs. Shy", "Zephyr Breeze", "Mr. Cake", "Mrs. Cake", "Pound Cake", "Pumpkin Cake", "Gallus", 
                     "Silverstream", "Smolder", "Yona", "Sandbar", "Ocellus", "Diamond Tiara", "Filthy Rich", "Spoiled Rich", "Silver Spoon", "Twist", "Snips", "Snails", "Sunny Daze", "Peachy Pie", "Pipsqueak", "Featherweight", 
                     "Rumble", "Filly Guides", "Zipporwhill", "Tender Taps", "Toola Roola", "Coconut Cream", "Wind Sprint", "Queen Chrysalis", "King Sombra", "Lord Tirek", "Adagio Dazzle", "Aria Blaze", "Sonata Dusk", 
                     "The Storm King", "Cozy Glow", "Grogar", "Gilda", "Trixie", "Discord", "Ahuizotl", "Garble", "Sunset Shimmer", "Dr. Caballeron", "Starlight Glimmer", "Juniper Montage", "Stygian", "Tempest Shadow", 
                     "Grubber", "Wallflower Blush", "Chancellor Neighsay", "Vignette Valencia", "Shadowbolts", "Boy Bullies", "Flim", "Flam", "Lightning Dust", "Mane-iac", "Mane-iac's henchponies", "Suri Polomare", 
                     "Wind Rider", "Svengallop", "Gladmane", "Diamond Dogs", "Principal Cinch", "Sludge", "Hoity Toity", "Photo Finish", "Sapphire Shores", "Fancy Pants", "Daring Do", "Prim Hemline", "Trenderhoof", 
                     "Coloratura", "Zesty Gourmand", "Songbird Serenade", "Spitfire", "Soarin", "Blaze", "Surprise", "Fire Streak", "Misty Fly", "Silver Zoom", "Fleetfoot", "High Winds", "Thunderlane", "Nurse Redheart", 
                     "Dr. Horse", "Dr. Fauna", "Doctor Horse", "Nurse ponies", "Mage Meadowbrook", "Flash Magnus", "Mistmane", "Rockhoof", "Somnambula", "Star Swirl the Bearded", "Royal guards", "Mayor Mare", "Cheerilee", 
                     "Spa ponies", "Sheriff Silverstar", "Davenport", "Twilight Velvet", "Night Light", "Joe", "Hondo Flanks", "Cookie Crumbles", "Jet Set", "Upper Crust", "Screw Loose", "Screwball", "Fancy Pants' entourage", 
                     "Fleur de Lis", "Junebug", "Friendship Express train conductors", "Cherry Jubilee", "Roma", "Gizmo", "Cloud Chaser", "Flitter", "Blossomforth", "Bulk Biceps", "Ms. Peachbottom", "Ms. Harshwhinny", 
                     "Flash Sentry", "Coco Pommel", "Cheese Sandwich", "The Pony Tones", "Randolph", "Silver Shill", "Stellar Eclipse", "Teddie Safari", "Claude", "Night Glider", "Party Favor", "Double Diamond", "Sugar Belle", 
                     "Weather Control Pegasi", "Trouble Shoes", "Tree Hugger", "Moon Dancer", "Sassy Saddles", "Spearhead", "Method Mares", "Hooffield", "McColt families", "Sunburst", "Sunburst's family", "Mr. Stripes", 
                     "Plaid Stripes", "Coriander Cumin", "Saffron Masala", "Quibble Pants", "Paleo family", "Sky Stinger", "Vapor Trail", "Angel Wings", "Bow Hothoof", "Windy Whistles", "Feather Bangs", 
                     "Couture du Future contestants", "Grand Pear", "Mudbriar", "Firelight", "Autumn Blaze", "Clear Sky", "Auntie Lofty", "Aunt Holiday", "Snap Shutter", "Mane Allgood", "Luster Dawn", "Lily Blossom", 
                     "Sugar Grape", "Bumblesweet", "Sweetcream Scoops", "Firecracker Burst", "Tealove", "Diamond Rose", "September", "Jade Singer", "Cherry Gold", "MandoPony", "Flax Seed", "Wheat Grass", "Sailor Moon ponies", 
                     "Ponyacci", "Inkwell", "Mad Men ponies", "8-bit", "Gaffer", "Hoofbeard", "Charity Sweetmint", "Kibitz", "Power Ponies (characters)", "Gallant True", "PheNOMNOMenons cart ladies", "Radiant Hope", 
                     "Pony Pickers", "Big Boy", "Runt", "Larry", "Buck Withers", "Sunflower", "Blue Moon", "North Star", "King Longhorn", "Zecora", "Cranky Doodle Donkey", "Matilda", "Mulia Mild", "Seabreeze", "Pharynx", 
                     "Terramar", "Sky Beak", "Ocean Flow", "Steven Magnet", "Little Strongheart", "Chief Thunderhooves", "Iron Will", "Gustave le Grand", "Scorpan", "The Smooze", "Grampa Gruff", "Greta", "Capper", 
                     "Captain Celaeno", "Crackle Cosette", "DJ Pon-3", "Vinyl Scratch", "Octavia Melody", "Bon Bon", "Sweetie Drops", "Lyra Heartstrings", "Oleander", "Arizona Cow","Paprika Paca", "Pom Lamb", "Tianhuo", 
                     "Velvet Reindeer", "Derpy Hooves", "kerfuffle", "sunny starscout", "izzy moonbow", "hitch trailblazer", "pipp petals", 'zipp storm', 'berry sweet', 'sprout cloverleaf', 'sugar moonlight', 'silver sable']

  var speciesnames = ["original species", "alicorn", "alien", "alp-luachra", "alpaca", "angel pony", "anthro", "bat pony", "bat pony alicorn", "cat pony", "changedling", "changeling", "changeling queen", "changepony", 
                      "classical hippogriff", "classical unicorn", "clydesdale", "crystal pony", "cyborg", "deer pony", "diamond dog", "dog pony", "dracony", "dragon", "duck pony", "earth pony", "fox pony", "ghost pony", 
                      "ghoul", "goo pony", "griffon", "hippogriff", "hybrid", "kirin", "monster pony", "object pony", "orca pony", "pegasus", "phoenix", "plane pony", "plant pony", "plush pony", "pony", "quagga", 
                      "raccoon pony", "robot pony", "sabertooth pony", "scorpion", "shark pony", "siren", "sphinx", "succubus", "tatzlpony", "tentacle monster", "toilet pony", "tree pony", "umbrum", "undead", "unicorn", 
                      "vampire", "vampony", "velociraptor", "weasel", "windigo", "wolf pony", "zebra", "zebracorn", "zebrasus", "zombie", "zony"]
  try{
    var UploadTime = document.getElementById("extrameta").childNodes[0].childNodes[1]
    UploadTime.title = moment(UploadTime.title).format("dddd MMMM Do YYYY hh:mm A");
  }catch{console.log("not in image")}
  for (var i = 0, max = element.length; i < max; i++) {
    var tagslist = ""
    var artlist = ""
    var oclist = ""
    var editlist = ""
    var artip = element[i].childNodes[1].childNodes[0].childNodes[1]
    // console.log("artip 1", artip)
    if (artip == undefined || artip == "" || artip == null || artip.isNaN) {
      // essentially a WEBM detector
      var artip = element[i].childNodes[1].childNodes[0].childNodes[0]
    }
    var ti = artip.title.split('Tagged: ')[0]
    var tle = artip.title.split('Tagged: ')[1]
    /*console.log('tle', tle)
    console.log('tle', artip.title.split('Tagged: ')[1])*/
    if (tle != undefined) {
      var size = `${ti.split(' ')[0]} ${ti.split(' ')[1]}`
      var titleparts = tle.split(', ')

      for (var i5 = 0, max5 = titleparts.length; i5 < max5; i5++) {
        if (!(titleparts[i5].includes("artist:") || titleparts[i5].includes("oc:"))) {//im here to remove stuff
          tagslist += `${titleparts[i5]}, `
        }
      }

      var arrayoccurrence = countOccurrencesOf(titleparts, 'artist:')
      for (var i3 = 0, max3 = arrayoccurrence.length; i3 < max3; i3++) {
        var artsplit = arrayoccurrence[i3].split('artist:')[1]
        artlist += `${artsplit}, `
      }
      if (arrayoccurrence.length == 0) {artlist = "No Artist listed  "}

      var arrayoccurrence = countOccurrencesOf(titleparts, 'editor:')
      for (var i2 = 0, max2 = arrayoccurrence.length; i2 < max2; i2++) {
        var editsplit = arrayoccurrence[i2].split('editor:')[1]
        editlist += `${editsplit}, `
      }
      if (arrayoccurrence.length == 0) {editlist = "No Editors listed  "}

      var arrayoccurrence = countOccurrencesOf(titleparts, 'oc:')
      for (var i4 = 0, max4 = arrayoccurrence.length; i4 < max4; i4++) {
        var ocsplit = arrayoccurrence[i4].split('oc:')[1]
        oclist += `${ocsplit}, `
      }
      if (arrayoccurrence.length == 0) {oclist = "No Original Characters Named in Picture  "}

      tagarray.push(tagslist.slice(0, -2))
      artarray.push(artlist.slice(0, -2))
      editarray.push(editlist.slice(0, -2))
      ocarray.push(oclist.slice(0, -2))
    }
  }
  for (var i = 0, max = element.length; i < max; i++) {
    var titlerating = element[i].childNodes[1].childNodes[0].childNodes[1]
    // console.log("titlerating 1", titlerating)
    if(titlerating == undefined || titlerating == "" || titlerating == null || titlerating.isNaN){
      // essentially a WEBM detector
      var titlerating = element[i].childNodes[1].childNodes[0].childNodes[0]
      // console.log("titlerating 2", titlerating)
    }
    // console.log("titlerating 3", titlerating)
    if (titlerating.title.includes("Tagged: safe")){         var rating = "safe"}
    if (titlerating.title.includes("Tagged: suggestive")){   var rating = "suggestive"}
    if (titlerating.title.includes("Tagged: questionable")){ var rating = "questionable"}
    if (titlerating.title.includes("Tagged: explicit")){     var rating = "explicit"}
    if (titlerating.title.includes("Tagged: grimdark")){     var rating = "grimdark"}
    if (titlerating.title.includes("Tagged: grotesque")){    var rating = "grotesque"}
    if (titlerating.title.includes("Tagged: semi-grimdark")){var rating = "semi-grimdark"}
    if (titlerating.title.includes("Tagged: source needed")){var rating = titlerating.title.split('source needed, ')[1].split(',')[0]}
    if (titlerating.title.includes("Tagged: source needed, useless source url")){var rating = titlerating.title.split('useless source url, ')[1].split(',')[0]}
    var connames = checker(titlerating.title, cannonnames, true)
    if(connames == ""){var connames = "No Canon Characters Named in Picture"}
    var specnames = checker(titlerating.title, speciesnames, true)
    if(specnames == ""){var specnames = "No Species Listed"}
    var artip = element[i].childNodes[1].childNodes[0].childNodes[1]
    // console.log("artip 1 placement", artip)
    if(artip == undefined || artip == "" || artip == null || artip.isNaN){
      // essentially a WEBM detector
      var artip = element[i].childNodes[1].childNodes[0].childNodes[0]
      // console.log("artip 2 placement", artip)
    }
    // console.log("artip 3 placement", artip)
    var date = element[i].childNodes[1].childNodes[0].getAttribute("data-created-at")
    //console.log(element[i], dateacreated)
    //var date = new Date(dateacreated);
    var datetime = moment(date).format("dddd MMMM Do YYYY hh:mm A");/*
    console.log('0', i)
    console.log('d', connames)
    console.log('f', specnames)
    console.log('g', size)
    console.log('h', rating)
    console.log('i', datetime)*/
    artip.title = `Tagged: ${tagarray[i]}

Artist: ${artarray[i]}
Editor: ${editarray[i]}
Cannon Characters: ${connames}
Original Characters: ${ocarray[i]}
Species: ${specnames}
${size}
Rating: ${rating}
Date: ${datetime}`
  }
}
start();
