const logout = (req , res) => {
    res.clearCookie('token');
    res.status(200).json({
        message : "You are logout now"
    });
}

module.exports = logout;