// Instantiate Github class
const github = new Github;

// Instantiate UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', function(e) {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    //Show profile
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.reposData);
                }
            })
    } else {
        ui.clearProfile();
    }
});