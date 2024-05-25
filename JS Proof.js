// Created a variable to hold NFTs
let nftStore = [];

// This function will take some parameters, create an NFT object using the parameters,
// and store it in the nftStore array.
function mintNFT(name, description, inventor, year) {
    const nft = {
        Language_Name: name,
        Language_description: description,
        Invented_by: inventor,
        In_year: year,
    };
    nftStore.push(nft);
}

// Create a loop that will go through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftStore.length; i++) {
        console.log("Language Name: " + nftStore[i].Language_Name);
        console.log("Language Description: " + nftStore[i].Language_description);
        console.log("Invented by: " + nftStore[i].Invented_by);
        console.log("In Year: " + nftStore[i].In_year);
        console.log('----------------------');
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftStore.length;
}

// Call your functions below this line

// Minting some NFTs for programming languages
mintNFT("JavaScript", "A high-level language.", "Brendan Eich", 1995);
mintNFT("Python", "An interpreted and high-level language.", "Guido van Rossum", 1991);
mintNFT("Java", "A high-level and object-oriented programming language.", "James Gosling", 1995);
mintNFT("C++", "A general-purpose programming language and also an extension of C.", "Bjarne Stroustrup", 1985);
mintNFT("Ruby", "An open-source programming language with a focus on simplicity.", "Yukihiro Matsumoto", 1995);

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
