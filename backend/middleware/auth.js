const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
    if (typeof roles === 'string') roles = [roles];

    return (req, res, next) => {

        console.log("=== AUTH MIDDLEWARE ===");
        console.log("Headers:", req.headers);

      const authHeader = req.headers.authorization;

if (!authHeader?.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' });
}

const token = authHeader.substring(7).trim();

        console.log("Token:", token);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("Decoded:", decoded);

            req.user = decoded;

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            next();
        } catch (err) {
            console.log("JWT ERROR:", err.message);
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
};

module.exports = authMiddleware;
