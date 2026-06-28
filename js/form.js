/**
 * Form JavaScript - Sundaram Bridal Studio
 * Form validation and submission handling
 */
import siteConfig from '../src/config/content.js';



// =========================================
// Form Validation
// =========================================
class FormValidator {
    constructor(form) {
        this.form = form;
        this.fields = {};
        this.init();
    }

    init() {
        // Get all form fields
        this.form.querySelectorAll('[data-validate]').forEach(field => {
            const rules = field.dataset.validate.split('|');
            this.fields[field.name] = { element: field, rules };

            // Real-time validation
            field.addEventListener('blur', () => this.validateField(field.name));
            field.addEventListener('input', () => {
                if (field.classList.contains('is-invalid')) {
                    this.validateField(field.name);
                }
            });
        });

        // Form submit
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateField(name) {
        const { element, rules } = this.fields[name];
        const value = element.value.trim();
        let isValid = true;
        let errorMessage = '';

        for (const rule of rules) {
            const [ruleName, ruleValue] = rule.split(':');

            switch (ruleName) {
                case 'required':
                    if (!value) {
                        isValid = false;
                        errorMessage = 'This field is required';
                    }
                    break;

                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (value && !emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;

                case 'phone':
                    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
                    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
                        isValid = false;
                        errorMessage = 'Please enter a valid phone number';
                    }
                    break;

                case 'min':
                    if (value && value.length < parseInt(ruleValue)) {
                        isValid = false;
                        errorMessage = `Must be at least ${ruleValue} characters`;
                    }
                    break;

                case 'date':
                    if (value) {
                        const date = new Date(value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (date < today) {
                            isValid = false;
                            errorMessage = 'Please select a future date';
                        }
                    }
                    break;
            }

            if (!isValid) break;
        }

        this.showFieldStatus(element, isValid, errorMessage);
        return isValid;
    }

    showFieldStatus(element, isValid, errorMessage) {
        const errorEl = element.parentElement.querySelector('.form__error');

        if (isValid) {
            element.classList.remove('is-invalid');
            element.classList.add('is-valid');
            if (errorEl) errorEl.remove();
        } else {
            element.classList.remove('is-valid');
            element.classList.add('is-invalid');

            if (errorEl) {
                errorEl.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          ${errorMessage}
        `;
            } else {
                const error = document.createElement('div');
                error.className = 'form__error';
                error.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          ${errorMessage}
        `;
                element.parentElement.appendChild(error);
            }
        }
    }

    validateAll() {
        let isValid = true;

        for (const name in this.fields) {
            if (!this.validateField(name)) {
                isValid = false;
            }
        }

        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateAll()) {
            // Focus first invalid field
            const firstInvalid = this.form.querySelector('.is-invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Collect form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.classList.add('is-loading');
        submitBtn.disabled = true;

        try {
            // Simulate API call (replace with actual endpoint)
            await this.submitForm(data);

            // Show success
            this.showSuccess();

            // Track event
            if (typeof trackEvent === 'function') {
                trackEvent('form_submit', {
                    form_name: this.form.id || 'contact_form',
                    service_interest: data.service || ''
                });
            }

        } catch (error) {
            console.error('Form submission error:', error);
            this.showError('Something went wrong. Please try again or contact us via WhatsApp.');
        } finally {
            submitBtn.classList.remove('is-loading');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async submitForm(data) {
        // Add Web3Forms required fields
        data.access_key = '5bb3dfb5-0dcf-41ba-8c24-3eb456eea425';
        data.from_name = 'Sundaram Bridal Studio (Website Enquiry)';
        data.subject = `New Enquiry from ${data.name || 'Website'}`;

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (response.status === 200) {
            return { success: true, result };
        } else {
            console.error('Web3Forms Error:', result);
            throw new Error(result.message || 'Form submission failed');
        }
    }

    showSuccess() {
        const successHtml = `
      <div class="form__success animate-scale-in">
        <div class="form__success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="form__success-title">Thank You!</h3>
        <p class="form__success-text">Your enquiry has been received. We'll get back to you within 2 hours during business hours (9am - 9pm IST).</p>
        <div class="mt-8">
          <a href="https://wa.me/917984017703?text=Hi!%20I%20just%20submitted%20an%20enquiry%20on%20the%20website." class="btn btn-whatsapp" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp for faster response
          </a>
        </div>
      </div>
    `;

        this.form.innerHTML = successHtml;
    }

    showError(message) {
        const errorHtml = `
      <div class="form__error" style="margin-bottom: var(--space-4); padding: var(--space-4); background: var(--color-blush-light); border-radius: var(--radius-md);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        ${message}
      </div>
    `;

        const existingError = this.form.querySelector('.form__error[style]');
        if (existingError) existingError.remove();

        this.form.insertAdjacentHTML('afterbegin', errorHtml);
    }
}

// =========================================
// Phone Number Formatting
// =========================================
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');

    // Add Indian country code if not present
    if (value.length > 0 && !value.startsWith('91')) {
        value = '91' + value;
    }

    // Format as +91 XXXXX XXXXX
    if (value.length > 2) {
        let formatted = '+' + value.slice(0, 2);
        if (value.length > 2) formatted += ' ' + value.slice(2, 7);
        if (value.length > 7) formatted += ' ' + value.slice(7, 12);
        input.value = formatted;
    }
}

// =========================================
// Initialize
// =========================================
function initForms() {
    document.querySelectorAll('form[data-validate-form]').forEach(form => {
        new FormValidator(form);
    });

    // Phone formatting
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', () => formatPhoneNumber(input));
    });

    initServiceDropdown();
}


function initServiceDropdown() {
    const serviceSelect = document.getElementById('service');
    if (!serviceSelect) return;

    // Keep only the first option ('Select a package/service')
    while (serviceSelect.options.length > 1) {
        serviceSelect.remove(1);
    }

    const { pricing } = siteConfig;

    if (pricing.packages && pricing.packages.items) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = 'Bridal Packages';
        Object.entries(pricing.packages.items).forEach(([key, pkg]) => {
            const option = document.createElement('option');
            option.value = `bridal-${key}`;
            option.textContent = `${pkg.name} Package (${pkg.price}${pkg.priceSuffix || ''})`;
            optgroup.appendChild(option);
        });
        serviceSelect.appendChild(optgroup);
    }

    if (pricing.engagement && pricing.engagement.items) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = 'Engagement / Baby Shower Packages';
        pricing.engagement.items.forEach((pkg, index) => {
            const option = document.createElement('option');
            option.value = `engagement-tier-${index + 1}`;
            option.textContent = `Engagement / Baby Shower ${pkg.name} (${pkg.price})`;
            optgroup.appendChild(option);
        });
        serviceSelect.appendChild(optgroup);
    }

    if (pricing.sider && pricing.sider.items) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = 'Sider Packages';
        pricing.sider.items.forEach((pkg, index) => {
            const option = document.createElement('option');
            option.value = `sider-tier-${index + 1}`;
            option.textContent = `Sider ${pkg.name} (${pkg.price})`;
            optgroup.appendChild(option);
        });
        serviceSelect.appendChild(optgroup);
    }


    const otherOption = document.createElement('option');
    otherOption.value = 'other';
    otherOption.textContent = 'Other / Not Sure';
    serviceSelect.appendChild(otherOption);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
} else {
    initForms();
}

export { FormValidator, initForms };
