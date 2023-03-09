/*
function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      if (mutation.type="childList") { 
        
                if (mutation.addedNodes){
                    
                let changedCount= Number((mutation.addedNodes[3]?.children[0]?.innerHTML)??'0');
                if(count<changedCount)
                {
                    console.log("added item") ;
                    dataLayer.push({"event": "added_item"}) ;
                    count = changedCount ;

                }
                else{
                    console.log("item removed") ;
                    dataLayer.push({"event": "removed_item"}) ;
                    count = changedCount ;
                }

                console.log(count);
                }
                
            //     if(mutation.removedNodes)
            //     {
            //   console.log("removed changes");
            //   console.log((mutation.addedNodes[3]?.children[0]?.innerHTML));
            //     }
      }
    });
  }

const targetNode = document.querySelector(".header__icon--cart");
console.log(document.querySelector(".header__icon--cart"));
const observerOptions = {
  childList: true,
  attributes: true,

  // Omit (or set to false) to observe only changes to the parent node
//   subtree: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
*/

//alert("Added to main page");




const container = document.querySelector('.has-scrollbar');
const sections = document.querySelectorAll('.slider-item');
let currentSection = 0;

function scrollToSection(sectionIndex) {
  sections[sectionIndex].scrollIntoView({
    behavior: 'smooth'
  });
  currentSection = sectionIndex;
}

function startAutoScroll() {
  scrollToSection(currentSection);
  currentSection = (currentSection + 1) % sections.length;
  setTimeout(startAutoScroll, 1000);
}

container.addEventListener('scroll', function() {
  const scrollPosition = container.scrollTop;
  let closestSection = 0;
  let closestDistance = Number.MAX_SAFE_INTEGER;
  sections.forEach(function(section, index) {
    const distance = Math.abs(scrollPosition - section.offsetTop);
    if (distance < closestDistance) {
      closestSection = index;
      closestDistance = distance;
    }
  });
  currentSection = closestSection;
});

startAutoScroll();
