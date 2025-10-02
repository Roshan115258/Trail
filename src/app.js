const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load products data
const productsData = require('./products.json');

// Validation helper
const validateContactData = (data) => {
  const errors = [];
  
  if (!data.name || data.name.length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  if (!data.service || data.service.length === 0) {
    errors.push({ field: 'service', message: 'Please select a service' });
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }
  
  if (!data.consent) {
    errors.push({ field: 'consent', message: 'You must agree to receive communications' });
  }
  
  return errors;
};

const validateNewsletterData = (data) => {
  const errors = [];
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  return errors;
};

// API Routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Several Sustain API'
  });
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const errors = validateContactData(req.body);
    
    if (errors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors 
      });
    }
    
    // In serverless, we'd typically send to external service (email, database, etc.)
    // For now, just acknowledge receipt
    console.log('Contact form submission:', req.body);
    
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: Date.now().toString()
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Newsletter subscription endpoint
app.post('/newsletter', async (req, res) => {
  try {
    const errors = validateNewsletterData(req.body);
    
    if (errors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors 
      });
    }
    
    // In serverless, we'd typically send to external service
    console.log('Newsletter subscription:', req.body);
    
    res.json({ 
      success: true, 
      message: 'Newsletter subscription successful',
      id: Date.now().toString()
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Product endpoints
app.get('/products', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      products: productsData 
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

app.get('/products/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const product = productsData.find(p => p.slug === slug);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    res.json({ 
      success: true, 
      product 
    });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

module.exports = app;
