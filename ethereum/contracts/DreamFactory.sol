pragma solidity ^0.4.17;

// dream story factory contract
contract DreamFactory {
    // array of addresses of deployed dream stories
    address[] public deployed_dream_stories;

    mapping(address => string) public stories_titles;
    /*
     * Create a new dream story
     * @param min_down_price minimum download price in wei
     */
    function createDreamStory( uint _min_down_price, string _title, string _story ) public {
        // create a new dream story
        address new_story = new DreamStory( _min_down_price, msg.sender, _title, _story );
        // save the deployed address
        deployed_dream_stories.push(new_story);
        //save the story title
        stories_titles[new_story]=_title;
    }

    /*
     * Get the deployed dream stories
     * @return addresses of the deployed dream stories
     */
    function getDeployedDreamStories() public view returns (address[]) {
        return deployed_dream_stories;
    }
}

// dream story contract
contract DreamStory {
    //// state variables
    //dream story title
    string public story_title;
    //dream story
    string public story;
    // download struct
    struct Download {
        // address of the downloder
        address downloader;
        // download price in wei
        uint price_wei;
        // download date
        uint date;
    }
    // download history
    Download[] public downloads;
    // author of a dream story
    address public author;
    // list of contributors as mapping
    mapping( address => bool ) public contributors;
    // number of votes which is the number of contributors
    uint public votes_count;
    // list of approvers
    mapping( address => bool ) public approvers;
    // number of approvers
    uint public approvers_count;
    // minimum download price in wei
    uint public min_down_price_wei;
    // list of downloaders as mapping
    mapping( address => bool ) public downloaders;

    //// modifier
    // only for author
    modifier onlyAuthor() {
        require( msg.sender == author );
        _;
    }
    // only for contributors
    modifier onlyContributor() {
        // the sender should be in the contributors list
        require( contributors[msg.sender] );
        _;
    }

    //// functions
    /*
     * Constructor
     @param min_down_price minimum download price in wei
     @param creator address of the creator of this story
     */
    function DreamStory( uint _min_down_price, address _creator, string _title, string _story ) public {
        // set author to message sender who is the creator of this dream story
        author= _creator;
        // set minimum download price
        min_down_price_wei= _min_down_price;
        //set story title
        story_title = _title;
        //set story
        story= _story;
    }

    /*
     * A contributor donates some money for a dream story.
     * So the money will be transfered to this contract address, resulted in increasing the balance
     * @note this function can receive some money, which is msg.value
     */
    function contribute() public payable {
        // check if the money is greater than zero
        require( msg.value > 0 );
        // increase the vote counts
        if( !contributors[msg.sender]) {
        votes_count++;
        // set contributor address to true
        contributors[ msg.sender ]= true;
    }}

    /*
     * Download (license of) the dream story
     * @note this function can receive some money, which is msg.value
     */
    function download() public payable onlyContributor {
        // check if the contributor has downloaded before.
        // if so, no need to download again
        require( !downloaders[msg.sender] );
        // check if the input price is bigger than the min_down_price_wei
        require( msg.value >= min_down_price_wei );
        // local variable is basically stored in storage,
        // and literal such as struct is created in memory since it is temporary.
        // storage variable references the original variable
        // memory variable copies the original variable
        // memory is temporary, storage is global.
        Download memory new_download= Download({
           downloader: msg.sender,
           price_wei: msg.value,
           date: now
        });

        // add it to the downloads array
        downloads.push( new_download );
        // set the download address to true
        downloaders[ msg.sender ]= true;
    }


    /*
     * Approve the payment to the author by a contributor
     * @note a contributor who already approved the withdrawl cannot call it again
     */
    function approveWithdrawal() public onlyContributor {
        // check whether this contributor approved the withdrawl already
        require( !approvers[msg.sender] );
        // set the account as an approver
        approvers[ msg.sender ]= true;
        // increase the counts
        approvers_count++;
    }

    /*
     * Execute the withdrawal by the author
     */
    function executeWithdrawal() public onlyAuthor {
        // half of contributors should approve the withdrawal
        require( approvers_count > ( votes_count/2 ) );
        // transfer the balance to the author
        author.transfer( address(this).balance );
    }

    /*
     * Get summary of the dream story
     * @return
     */
    function getSummary() public view returns ( uint, uint, uint, uint, uint, address, string, string )
    {
        return (
          address(this).balance,
          votes_count,
          downloads.length,
          min_down_price_wei,
          approvers_count,
          author,
          story_title,
          story
        );
    }

    /*
     * Get the number of downloads
     * @return the length of downloads instance
     */
     function getDownloadsCount() public view returns (uint) {
         return downloads.length;
     }
}