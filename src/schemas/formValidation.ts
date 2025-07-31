import { z } from 'zod';

// XSS prevention: Basic sanitization
const sanitizeString = (str: string) => {
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};

// Custom string validation with sanitization
const sanitizedString = z.string().transform(sanitizeString);

export const quoteFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .transform(sanitizeString),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits')
    .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format'),
  
  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email cannot exceed 100 characters'),
  
  serviceType: z.string()
    .min(1, 'Please select a service type'),
  
  location: z.string()
    .min(1, 'Please select a location'),
  
  propertyType: z.string().optional(),
  
  propertySize: z.string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val), 'Property size must be a valid number'),
  
  preferredDate: z.string().optional(),
  
  additionalRequirements: z.string()
    .max(500, 'Additional requirements cannot exceed 500 characters')
    .optional()
    .transform((val) => val ? sanitizeString(val) : val)
});

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .transform(sanitizeString),
  
  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email cannot exceed 100 characters'),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits')
    .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format'),
  
  location: z.string()
    .min(1, 'Please select a location'),
  
  serviceNeeded: z.string()
    .min(1, 'Please select a service'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters')
    .transform(sanitizeString)
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;