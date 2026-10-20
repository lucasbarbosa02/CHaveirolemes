/**
 * Chaveiro Lemes — Vanilla JavaScript Interactive Engine
 * Handles navigation, mobile menu, quick WhatsApp dispatcher, service filters, and FAQ accordion.
 */

document.addEventListener('DOMContentLoaded', () => {
  const PHONE_RAW = '5562981255426';
  const PHONE_DISPLAY = '(62) 98125-5426';

  // 1. Scroll-aware Header
  const header = document.getElementById('main-header');
  const navContainer = document.getElementById('nav-container');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      navContainer?.classList.add('bg-[#090B0E]/95', 'backdrop-blur-md', 'shadow-2xl');
      navContainer?.classList.remove('bg-[#090B0E]/85', 'backdrop-blur-sm');
    } else {
      navContainer?.classList.remove('bg-[#090B0E]/95', 'backdrop-blur-md', 'shadow-2xl');
      navContainer?.classList.add('bg-[#090B0E]/85', 'backdrop-blur-sm');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      }
    });

    // Close menu when clicking links
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      });
    });
  }

  // 3. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 4. Quick Service Dispatcher (Interactive WhatsApp Message Builder)
  let selectedService = 'Chave trancada dentro do carro';
  let selectedUrgency = 'urgente';

  // Service option buttons
  const serviceOptionBtns = document.querySelectorAll('.service-opt-btn');
  serviceOptionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      serviceOptionBtns.forEach((b) => {
        b.classList.remove('bg-[#1B2128]', 'border-[#D9A441]', 'text-[#F4F6F8]');
        b.classList.add('bg-[#090B0E]/60', 'border-white/5', 'text-[#8C969F]');
        const iconContainer = b.querySelector('.opt-icon-container');
        if (iconContainer) {
          iconContainer.classList.remove('bg-[#D9A441]/20', 'text-[#D9A441]');
          iconContainer.classList.add('bg-white/5', 'text-[#8C969F]');
        }
      });

      btn.classList.add('bg-[#1B2128]', 'border-[#D9A441]', 'text-[#F4F6F8]');
      btn.classList.remove('bg-[#090B0E]/60', 'border-white/5', 'text-[#8C969F]');
      const activeIcon = btn.querySelector('.opt-icon-container');
      if (activeIcon) {
        activeIcon.classList.add('bg-[#D9A441]/20', 'text-[#D9A441]');
        activeIcon.classList.remove('bg-white/5', 'text-[#8C969F]');
      }

      selectedService = btn.getAttribute('data-service') || 'Atendimento de Chaveiro';
    });
  });

  // Urgency buttons
  const urgencyBtns = document.querySelectorAll('.urgency-btn');
  urgencyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      urgencyBtns.forEach((b) => {
        b.classList.remove('bg-[#D9A441]/15', 'border-[#D9A441]', 'text-[#D9A441]', 'bg-white/10', 'border-white/30', 'text-[#F4F6F8]');
        b.classList.add('bg-[#090B0E]', 'border-white/10', 'text-[#8C969F]');
      });

      const urgencyValue = btn.getAttribute('data-urgency');
      selectedUrgency = urgencyValue || 'urgente';

      if (selectedUrgency === 'urgente') {
        btn.classList.add('bg-[#D9A441]/15', 'border-[#D9A441]', 'text-[#D9A441]');
        btn.classList.remove('bg-[#090B0E]', 'border-white/10', 'text-[#8C969F]');
      } else {
        btn.classList.add('bg-white/10', 'border-white/30', 'text-[#F4F6F8]');
        btn.classList.remove('bg-[#090B0E]', 'border-white/10', 'text-[#8C969F]');
      }
    });
  });

  // Form submit
  const dispatchForm = document.getElementById('dispatch-form');
  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const neighborhoodSelect = document.getElementById('bairro-select');
      const detailsInput = document.getElementById('detalhes-input');

      const neighborhood = neighborhoodSelect ? neighborhoodSelect.value : 'Setor Pedro Ludovico';
      const details = detailsInput ? detailsInput.value.trim() : '';

      const urgencyTag = selectedUrgency === 'urgente' ? '🚨 [URGÊNCIA / AGORA]' : '📋 [ORÇAMENTO / DÚVIDA]';
      const detailLine = details ? `\n• Detalhes: ${details}` : '';

      const message = `Olá, Chaveiro Lemes! Preciso de atendimento em Goiânia:
${urgencyTag}
• Serviço: ${selectedService}
• Bairro/Local: ${neighborhood}${detailLine}

Poderia me informar a disponibilidade e valores para esse atendimento?`;

      const whatsappUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 5. Service Category Filters
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('bg-[#1B2128]', 'text-[#F4F6F8]', 'shadow-sm', 'border', 'border-white/10');
        b.classList.add('text-[#8C969F]');
      });

      btn.classList.add('bg-[#1B2128]', 'text-[#F4F6F8]', 'shadow-sm', 'border', 'border-white/10');
      btn.classList.remove('text-[#8C969F]');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 6. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const chevron = item.querySelector('.faq-chevron');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other items
        faqItems.forEach((other) => {
          if (other !== item) {
            const otherTrigger = other.querySelector('.faq-trigger');
            const otherContent = other.querySelector('.faq-content');
            const otherChevron = other.querySelector('.faq-chevron');
            otherTrigger?.setAttribute('aria-expanded', 'false');
            otherContent?.classList.add('hidden');
            otherChevron?.classList.remove('rotate-180');
          }
        });

        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          content.classList.add('hidden');
          chevron?.classList.remove('rotate-180');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          content.classList.remove('hidden');
          chevron?.classList.add('rotate-180');
        }
      });
    }
  });

  // 7. Floating WhatsApp Tooltip Dismiss
  const dismissTooltipBtn = document.getElementById('dismiss-whatsapp-tooltip');
  const whatsappTooltip = document.getElementById('whatsapp-tooltip');
  if (dismissTooltipBtn && whatsappTooltip) {
    dismissTooltipBtn.addEventListener('click', () => {
      whatsappTooltip.classList.add('hidden');
    });
  }

  // 8. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
