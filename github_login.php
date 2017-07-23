function signup_github()
{
    $client_id = 'a059bad1d46d39a26e96';
    $redirect_url = 'https://tebahpla.github.io/callback';
     
    //login request
    if($_SERVER['REQUEST_METHOD'] == 'GET')
    {
        $url = "https://github.com/login/oauth/authorize?client_id=$client_id&redirect_uri=$redirect_url&scope=user";
        header("Location: $url");
    }
}
