class clipBoard {
    constructor() {
        //console.log("cut-to-clipboard");

        const copyButton = document.querySelectorAll('._copy');
        for (let i = 0; i < copyButton.length; i++) {
            copyButton[i].addEventListener('click', () => {
            
                const allAnchors = document.querySelectorAll('._copy');
                const clickedAnchor = allAnchors[i]
                
                // optional: this reverts the copied text and class to the original states
                clickedAnchor.classList.add('_copied');
                clickedAnchor.innerHTML='Copied to clipboard';

                // optional: this reverts the copied text and class to the original states
                setTimeout(copyTimer, 5000);
                function copyTimer() {
                    clickedAnchor.classList.remove('_copied');
                    clickedAnchor.innerHTML='Copy to clipboard';
                }
        
                const selectParent = clickedAnchor.parentElement.children[0];
               //const selectParent = clickedAnchor.parentElement.children[0].value;
               selectParent.select();
               document.execCommand('copy');
               console.log('Copied the text: ' + selectParent.value);
        
            });
        }
    }
}
export default clipBoard;