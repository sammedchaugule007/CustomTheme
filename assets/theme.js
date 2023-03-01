
function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case "childList":
          /* One or more children have been added to and/or removed
             from the tree.
             (See mutation.addedNodes and mutation.removedNodes.) */
                if (mutation.addedNodes){
                console.log("added changes");
                console.log(mutation.addedNodes[3]);
                }
                
                if(mutation.removedNodes)
                {
              console.log("removed changes");
              console.log(mutation.removedNodes[3]);
                }
          break;
        case "attributes":
          /* An attribute value changed on the element in
             mutation.target.
             The attribute name is in mutation.attributeName, and
             its previous value is in mutation.oldValue. */
             console.log("Attribute changes");

            
          break;
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
