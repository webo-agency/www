<template>
  <div class="max-w-full" ref="faqContainer">
    <div class="space-y-4 tablet:space-y-6">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockFaqSimpleMd",
  data() {
    return {
      faqState: {
        activeItem: null,
        items: [],
        scrollProgress: {}, // Track scroll progress for each item
        isScrollingThroughFaq: false, // Flag to indicate active scrolling
        registerItem: (itemId) => {
          if (!this.faqState.items.includes(itemId)) {
            this.faqState.items.push(itemId);
            this.faqState.scrollProgress[itemId] = 0;
          }
        },
        handleItemClicked: (itemId) => {
          this.faqState.activeItem = this.faqState.activeItem === itemId ? null : itemId;
        },
        setActiveItem: (itemId) => {
          this.faqState.activeItem = itemId;
        },
        setScrollProgress: (itemId, progress) => {
          this.faqState.scrollProgress[itemId] = Math.max(0, Math.min(100, progress));
        }
      },
      observer: null,
      wheelHandler: null,
      touchStartHandler: null,
      touchMoveHandler: null,
      touchEndHandler: null,
      sectionInView: false,
      scrollAccumulator: 0,
      currentItemIndex: 0,
      isScrollingThroughFaq: false,
      isSectionCentered: false,
      touchStartY: 0,
      lastTouchY: 0,
      isTouching: false,
      animationDuration: 300 // ms for each item transition
    };
  },
  provide() {
    return { faqState: this.faqState };
  },
  mounted() {
    // IntersectionObserver to detect when section is in view (center visible)
    const sectionOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1 // Start hijacking when 50% of section is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.sectionInView = entry.isIntersecting;
        if (!entry.isIntersecting) {
          this.isScrollingThroughFaq = false;
          this.scrollAccumulator = 0;
          this.isSectionCentered = false;
        }
      });
    }, sectionOptions);

    this.$nextTick(() => {
      this.observer.observe(this.$el);
    });

    // Add wheel event listener for desktop
    this.wheelHandler = (e) => this.handleWheel(e);
    window.addEventListener('wheel', this.wheelHandler, { passive: false });

    // Add touch event listeners for mobile
    this.touchStartHandler = (e) => this.handleTouchStart(e);
    this.touchMoveHandler = (e) => this.handleTouchMove(e);
    this.touchEndHandler = (e) => this.handleTouchEnd(e);
    
    window.addEventListener('touchstart', this.touchStartHandler, { passive: false });
    window.addEventListener('touchmove', this.touchMoveHandler, { passive: false });
    window.addEventListener('touchend', this.touchEndHandler, { passive: false });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('wheel', this.wheelHandler);
    window.removeEventListener('touchstart', this.touchStartHandler);
    window.removeEventListener('touchmove', this.touchMoveHandler);
    window.removeEventListener('touchend', this.touchEndHandler);
  },
  methods: {
    centerSection() {
      if (!this.isSectionCentered && this.$el) {
        this.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this.isSectionCentered = true;
      }
    },
    handleWheel(e) {
      if (!this.sectionInView || this.faqState.items.length === 0) {
        this.isSectionCentered = false;
        return;
      }

      // Each item gets more scroll distance to fully expand (slows down animation)
      const scrollPerItem = 600;

      // Check if we've exhausted all items - resume normal scrolling
      const maxScroll = this.faqState.items.length * scrollPerItem;
      if (this.scrollAccumulator >= maxScroll && e.deltaY > 0) {
        this.isScrollingThroughFaq = false;
        this.faqState.isScrollingThroughFaq = false;
        this.faqState.setActiveItem(null);
        this.isSectionCentered = false;
        return; // Allow normal scroll
      }

      // Allow scrolling back up to previous sections when at the beginning
      if (this.scrollAccumulator <= 0 && e.deltaY < 0) {
        this.isScrollingThroughFaq = false;
        this.faqState.isScrollingThroughFaq = false;
        this.faqState.setActiveItem(null);
        this.scrollAccumulator = 0;
        this.isSectionCentered = false;
        return; // Allow normal scroll up
      }

      // Center the section on first interaction
      if (!this.isSectionCentered) {
        e.preventDefault();
        this.centerSection();
        return;
      }

      // Prevent default scrolling while in FAQ section
      e.preventDefault();
      this.isScrollingThroughFaq = true;
      this.faqState.isScrollingThroughFaq = true;
      
      this.scrollAccumulator = Math.max(0, this.scrollAccumulator + e.deltaY);
      
      const newIndex = Math.floor(this.scrollAccumulator / scrollPerItem);
      
      // Clamp to valid item range
      if (newIndex < this.faqState.items.length) {
        this.currentItemIndex = newIndex;
        
        // Reset progress for all items
        this.faqState.items.forEach((itemId, index) => {
          this.faqState.setScrollProgress(itemId, 0);
        });
        
        // Calculate progress for current item
        const itemProgress = ((this.scrollAccumulator % scrollPerItem) / scrollPerItem) * 100;
        const currentItemId = this.faqState.items[this.currentItemIndex];
        
        // Set progress for current item (opening)
        this.faqState.setScrollProgress(currentItemId, itemProgress);
        
        // If there's a previous item, close it simultaneously
        if (this.currentItemIndex > 0 && itemProgress < 100) {
          const prevItemId = this.faqState.items[this.currentItemIndex - 1];
          const closingProgress = 100 - itemProgress; // Close as current opens
          this.faqState.setScrollProgress(prevItemId, closingProgress);
        }
        
        // Set active item based on progress threshold
        if (itemProgress > 50) {
          this.faqState.setActiveItem(currentItemId);
        } else if (this.currentItemIndex > 0) {
          const prevItemId = this.faqState.items[this.currentItemIndex - 1];
          this.faqState.setActiveItem(prevItemId);
        } else {
          this.faqState.setActiveItem(null);
        }
      }
    },
    handleTouchStart(e) {
      if (!this.sectionInView || this.faqState.items.length === 0) {
        this.isSectionCentered = false;
        return;
      }

      this.isTouching = true;
      this.touchStartY = e.touches[0].clientY;
      this.lastTouchY = e.touches[0].clientY;
    },
    handleTouchMove(e) {
      if (!this.isTouching || !this.sectionInView || this.faqState.items.length === 0) {
        this.isSectionCentered = false;
        return;
      }

      // Each item gets more scroll distance to fully expand (slows down animation)
      const scrollPerItem = 600;

      const currentY = e.touches[0].clientY;
      const deltaY = this.lastTouchY - currentY; // Inverted for natural touch scrolling
      this.lastTouchY = currentY;

      // Check if we've exhausted all items - resume normal scrolling
      const maxScroll = this.faqState.items.length * scrollPerItem;
      if (this.scrollAccumulator >= maxScroll && deltaY > 0) {
        this.isScrollingThroughFaq = false;
        this.faqState.isScrollingThroughFaq = false;
        this.faqState.setActiveItem(null);
        this.isSectionCentered = false;
        return; // Allow normal scroll
      }

      // Allow scrolling back up to previous sections when at the beginning
      if (this.scrollAccumulator <= 0 && deltaY < 0) {
        this.isScrollingThroughFaq = false;
        this.faqState.isScrollingThroughFaq = false;
        this.faqState.setActiveItem(null);
        this.scrollAccumulator = 0;
        this.isSectionCentered = false;
        return; // Allow normal scroll up
      }

      // Center the section on first interaction
      if (!this.isSectionCentered) {
        e.preventDefault();
        this.centerSection();
        return;
      }

      // Prevent default scrolling while in FAQ section
      e.preventDefault();
      this.isScrollingThroughFaq = true;
      this.faqState.isScrollingThroughFaq = true;
      
      this.scrollAccumulator = Math.max(0, this.scrollAccumulator + deltaY);
      
      const newIndex = Math.floor(this.scrollAccumulator / scrollPerItem);
      
      // Clamp to valid item range
      if (newIndex < this.faqState.items.length) {
        this.currentItemIndex = newIndex;
        
        // Reset progress for all items
        this.faqState.items.forEach((itemId, index) => {
          this.faqState.setScrollProgress(itemId, 0);
        });
        
        // Calculate progress for current item
        const itemProgress = ((this.scrollAccumulator % scrollPerItem) / scrollPerItem) * 100;
        const currentItemId = this.faqState.items[this.currentItemIndex];
        
        // Set progress for current item (opening)
        this.faqState.setScrollProgress(currentItemId, itemProgress);
        
        // If there's a previous item, close it simultaneously
        if (this.currentItemIndex > 0 && itemProgress < 100) {
          const prevItemId = this.faqState.items[this.currentItemIndex - 1];
          const closingProgress = 100 - itemProgress; // Close as current opens
          this.faqState.setScrollProgress(prevItemId, closingProgress);
        }
        
        // Set active item based on progress threshold
        if (itemProgress > 50) {
          this.faqState.setActiveItem(currentItemId);
        } else if (this.currentItemIndex > 0) {
          const prevItemId = this.faqState.items[this.currentItemIndex - 1];
          this.faqState.setActiveItem(prevItemId);
        } else {
          this.faqState.setActiveItem(null);
        }
      }
    },
    handleTouchEnd(e) {
      this.isTouching = false;
    }
  }
};
</script>
