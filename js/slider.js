document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const leftButton = document.querySelector('.btn-arrow.left');
    const rightButton = document.querySelector('.btn-arrow.right');

    let currentPosition = 0; // Current position of the slider
    let moveDistance = 0; // Distance to move per click
    let maxPosition = 0; // Maximum scrollable position
    let padding = 82; // Default padding

    const calculateSliderDimensions = () => {
        const screenWidth = window.innerWidth;

        // Adjust padding dynamically based on screen width
        padding = screenWidth >= 1293 ? 82 : 8;

        // Total width of all slides combined (including margins)
        const totalSliderWidth = [...slides].reduce(
            (acc, slide) => acc + slide.offsetWidth + 20, // Include margin (20px)
            0
        );

        // Visible width of the slider (parent container's width minus padding)
        const visibleWidth =
            sliderContainer.parentElement.offsetWidth - padding * 2;

        // Number of clicks required based on screen width
        const numberOfClicks = screenWidth >= 769 ? 3 : 6;

        // Calculate move distance per click
        moveDistance = Math.ceil((totalSliderWidth - visibleWidth) / numberOfClicks);

        // Correct maxPosition to ensure proper padding at the end
        maxPosition = totalSliderWidth - visibleWidth;

        // Reset the slider position
        currentPosition = 0;
        updateSlider();
    };

    const updateSlider = () => {
        sliderContainer.style.transform = `translateX(-${currentPosition}px)`;
        sliderContainer.style.transition = 'transform 0.3s ease-in-out';

        // Enable/Disable buttons based on position
        leftButton.disabled = currentPosition === 0;
        rightButton.disabled = currentPosition >= maxPosition;

        leftButton.classList.toggle('btn-disabled', currentPosition === 0);
        rightButton.classList.toggle('btn-disabled', currentPosition >= maxPosition);
    };

    const moveSlider = (direction) => {
        if (direction === 'right' && currentPosition < maxPosition) {
            currentPosition = Math.min(currentPosition + moveDistance, maxPosition);
        } else if (direction === 'left' && currentPosition > 0) {
            currentPosition = Math.max(currentPosition - moveDistance, 0);
        }
        updateSlider();
    };

    // Event Listeners for Buttons
    leftButton.addEventListener('click', () => moveSlider('left'));
    rightButton.addEventListener('click', () => moveSlider('right'));

    // Recalculate dimensions on window resize
    window.addEventListener('resize', calculateSliderDimensions);

    // Initial setup
    calculateSliderDimensions();
});
