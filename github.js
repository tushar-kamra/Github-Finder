class Github {
    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}`);
        const profileData = await profileResponse.json();
        console.log(profileData);
        return profileData;
    }
}