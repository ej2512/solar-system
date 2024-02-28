//my last semester's doodle:appliance-Virtual Solar System Telescope: https://codepen.io/ej2512/pen/JjxRZVx
let App = Vue.createApp({
  data() {
    return {
      planets: [
        {
          name: "Sun",
          imgsrc:
            "https://sunaeon.solarsystemscope.com/spacepedia/images/handbook/renders/sun.png",
          //the distance of the planet from the Sun in Astronomical Units
          auDistance: 0,
          sizeKm: 1391000,
          composition: "Hydrogen and helium",
          atmosphere: "Photosphere, chromosphere, and corona",
          interestingFacts:
            "The Sun accounts for 99.86% of the mass in the Solar System.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_sun.png",
          isShow: true
        },

        {
          name: "Mercury",
          imgsrc:
            "https://blog.solarsystemscope.com/spacepedia/images/handbook/renders/mercury.png",
          auDistance: 0.39,
          sizeKm: 4879,
          composition: "Rocky",
          atmosphere:
            "Thin, contains oxygen, sodium, hydrogen, helium, and potassium",
          interestingFacts:
            "Mercury is the smallest and innermost planet in the Solar System.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_mercury.png",
          isShow: true
        },
        {
          name: "Venus",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/venus.png",
          auDistance: 0.72,
          sizeKm: 12104,
          composition: "Rocky",
          atmosphere:
            "Thick, mainly carbon dioxide with clouds of sulfuric acid",
          interestingFacts:
            "Venus is the hottest planet in our solar system with a surface temperature over 400°C.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_venus.png",
          isShow: true
        },
        {
          name: "Earth",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/earth.png",
          auDistance: 1,
          sizeKm: 12742,
          composition: "Rocky",
          atmosphere: "Nitrogen, oxygen, with traces of other gases",
          interestingFacts:
            "Earth is the only planet in our solar system known to harbor life.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_earth.png",
          isShow: true
        },
        {
          name: "Mars",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png",
          auDistance: 1.52,
          sizeKm: 6779,
          composition: "Rocky",
          atmosphere: "Thin, mostly carbon dioxide with nitrogen and argon",
          interestingFacts:
            "Mars is home to the tallest mountain in the solar system, Olympus Mons.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_mars.png",
          isShow: true
        },
        {
          name: "Jupiter",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png",
          auDistance: 5.2,
          sizeKm: 139820,
          composition: "Gas",
          atmosphere:
            "Hydrogen and helium with traces of methane, water, ammonia, and other gases",
          interestingFacts:
            "Jupiter has the most moons of any planet in the Solar System, with 79 confirmed.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_jupiter.png",
          isShow: true
        },
        {
          name: "Saturn",
          imgsrc:
            "https://blog.solarsystemscope.com/spacepedia/images/handbook/renders/saturn.png",
          auDistance: 9.58,
          sizeKm: 116460,
          composition: "Gas",
          atmosphere:
            "Hydrogen and helium with traces of methane, ammonia, and other gases",
          interestingFacts:
            "Saturn has the most extensive rings of any planet, made up of ice and rock particles.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_saturn.png",
          isShow: true
        },
        {
          name: "Uranus",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/uranus.png",
          auDistance: 19.22,
          sizeKm: 50724,
          composition: "Ice",
          atmosphere: "Hydrogen, helium, and methane",
          interestingFacts:
            "Uranus rotates on its side, making it unique among the planets in our solar system.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_uranus.png",
          isShow: true
        },
        {
          name: "Neptune",
          imgsrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/neptune.png",
          auDistance: 30,
          sizeKm: 49244,
          composition: "Ice",
          atmosphere: "Hydrogen, helium, and methane",
          interestingFacts:
            "Neptune is the most distant planet from the Sun and has strong winds reaching 2,100 km/h.",
          isSelected: false,
          structureImgSrc:
            "https://www.solarsystemscope.com/spacepedia/images/handbook/structures/structure_neptune.png",
          isShow: true
        }
        //...
      ],
      filterType: "all",
      sortOrder: "auDistance",
      searchQuery: "",
      distance: 0,
      filteredPlanets: []
    };
  },

  methods: {
    //select a planet based on its AU distance
selectPlanet(auDistance) {
      this.distance = auDistance;
    },


  searchPlanets() {
    this.planets.forEach(planet => {
      planet.isShow = true;
    });
    
    if (this.searchQuery) {
      this.planets.forEach(planet => {
        if (this.searchQuery.length > 2) {//search from the first three letters
          const matchesSearch = planet.name.toLowerCase().startsWith(this.searchQuery.toLowerCase(),0);
        planet.isShow = matchesSearch;
          
        }
     
      });
    }
  },

  filterPlanets() {
    this.planets.forEach(planet => {
      planet.isShow = true;
    });
  
    if (this.filterType !== 'all') {
      this.planets.forEach(planet => {
        const matchesFilter = planet.composition === this.filterType;
        planet.isShow = matchesFilter;
      });
    }
  },
    //sort logic
    sortPlanets() {
      if (this.sortOrder === "auDistance") {
        this.planets.sort((a, b) => a.auDistance - b.auDistance);
      } else if (this.sortOrder === "sizeKm") {
        this.planets.sort((a, b) => a.sizeKm - b.sizeKm);
      }
    }
    /* in addition to using methods for sorting, filtering, and searching functionality, i also try the computed approach. While both approaches are valid, I'm curious about which one would be considered more efficient for this scenario. 
computed: {
  //filter logic
  filteredAndSortedPlanets() {
    let result = this.planets;
    if (this.filterType !== 'all') {
      result = result.filter(planet => planet.composition === this.filterType);
    }

    if (this.searchQuery) {
      result = result.filter(planet =>   planet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
*/
  },

  computed: {
    currentPlanet() {
      //it's difficult to position a slider exactly at the specific auDistance of a planet, so i use a range in determining the current planet.
      //why 0.2? because the distance between Earth and Venus is approximately 0.28 AU. when interacting with the planet list on the left side, selecting a range greater than 0.28 could cause the interface to select Venus when my intention was to select Earth.
      const range = 0.2;
      return this.planets.find(
        (planet) => Math.abs(planet.auDistance - this.distance) <= range
      );
    },
    currentPlanetImage() {
      const planet = this.currentPlanet;
      return planet ? planet.imgsrc : "";
    }
  },

  template: `
<div class="app-container">
  <div class="planet-list">
      <div class="search-option">
      <input type="text" v-model="searchQuery" @input="searchPlanets" placeholder="Search planets" />
    </div>
  <div class="sort-options">
  <label for="sort">Sort:</label>
  <select v-model="sortOrder" @change="sortPlanets" >
    <option value="auDistance">Distance</option>
    <option value="sizeKm">Size</option>
  </select>
</div>
    <div class="filter-options">
  <label>
    <input type="radio" value="all" v-model="filterType" @change="filterPlanets"> All
  </label>
  <label>
    <input type="radio" value="Rocky" v-model="filterType" @change="filterPlanets"> Rocky
  </label>
  <label>
    <input type="radio" value="Gas" v-model="filterType" @change="filterPlanets"> Gas
  </label>
    <label>
    <input type="radio" value="Ice" v-model="filterType" @change="filterPlanets"> Ice
  </label>
</div>
     <planet-item v-for="planet in planets" v-show="planet.isShow" :key="planet.name" :planet="planet" @click="selectPlanet(planet.auDistance)">>
      <img :src="planet.imgsrc" :alt="planet.name" class="planet-thumbnail">
      <span>{{ planet.name }}</span>
    </planet-item>
  </div>
  <div class="main-content">
    <div class="controls-container">
    <label for="distance">Adjust Distance to Find a Planet:</label>
      <input type="range" v-model="distance" min="0" max="30" step="0.1">
      <div class="distance-label">{{ currentPlanet ? currentPlanet.name + ' (' + currentPlanet.auDistance + ' AU)' : 'Looking for a planet' }}</div>
    </div>
    <div v-if="currentPlanet" class="planet-details">
      <img :src="currentPlanetImage" alt="Selected Planet Image" class="planet-image">
      <div class="planet-info">
        <h2>Name: {{ currentPlanet.name }}</h2>
        <p>SizeKm: {{ currentPlanet.sizeKm }}</p>
        <p>Composition: {{ currentPlanet.composition }}</p>
        <p>Atmosphere: {{ currentPlanet.atmosphere }}</p>
        <p>Interesting Facts: {{ currentPlanet.interestingFacts }}</p>
      </div>
    </div>
  </div>
<div class="solar-system-map-container">
 <solar-system-map :selectedPlanet="currentPlanet" :planets="planets"></solar-system-map>
 </div>
</div>
  `
});

//individual planet items in the planet list
App.component("planet-item", {
  props: ["planet"],
  data() {
    return {
      isSelected: false
    };
  },

  methods: {
    //highlight planet items when we hover over a planet
    mouseEnter() {
      this.isSelected = true;
    },
    mouseLeave() {
      this.isSelected = false;
    }
  },

  template: `
<div class="planet-item" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :class="{ 'is-selected': isSelected }">
    <img :src="planet.imgsrc" :alt="planet.name" class="planet-thumbnail">
    <span>{{ planet.name }}</span>
</div>
  `
});

App.component("SolarSystemMap", {
  props: ["selectedPlanet", "planets"],
  methods: {
    //calculates where each planet should be on the map, based on its distance from the Sun
    calculatePosition(auDistance) {
      // scale the distance for the map.
      return Math.log(auDistance + 1) * 50;
    }
  },

  computed: {
    selectedPlanetImgSrc() {
      return this.selectedPlanet ? this.selectedPlanet.imgsrc : "";
    }
  },

  //in my doodle assignment from last semester, the orbital paths were visually represented as rings using HTML and CSS. Each orbit was made from a <div> element that had a border but no fill color. These divs were styled to be circular using border-radius: 50%, creating the appearance of astronomical orbits.  (https://codepen.io/ej2512/pen/JjxRZVx)
  //for this doodle assignment, i try an easier way to use svg elements to draw orbits and planets. Orbits are represented by circles, and planets are represented by images placed on these orbits
  template: `
  <div class="solar-system-map-container">
  <img v-if="selectedPlanet" :src="selectedPlanet.structureImgSrc" class="planet-structure-image" alt="Planet Structure" />
  <svg class="solar-system-map" viewBox="0 0 600 320">
  <circle v-for="planet in planets" :key="planet.name" cx="300" cy="300" :r="calculatePosition(planet.auDistance)" stroke="white" stroke-width="2" stroke-dasharray="7,7" fill="none"/>
  <image xlink:href="https://sunaeon.solarsystemscope.com/spacepedia/images/handbook/renders/sun.png" x="290" y="290" height="20" width="20" />
  <image :href="selectedPlanetImgSrc" :x="300 + calculatePosition(selectedPlanet.auDistance) - 10" :y="300 - 10" height="20" width="20" />
</svg>
</div>
  `
});

App.mount("#app");
