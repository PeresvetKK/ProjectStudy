export const tabs = () => {
    $('.tabs__item').click(function () {
        let id = $(this).attr('data-tab'),
            content = $('.tab-content[data-tab="' + id + '"]');
        $('.tabs__item.tabs__item--active').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tab-content.active').removeClass('active');
        content.addClass('active');
    });
}

export const dropDown = (element, dropContent) =>{
    const dropdowns = document.querySelector(`${dropContent}`);
    window.onclick = (e) => {
        e.target.closest(`${element}`) 
            ?
            dropdowns.classList.contains('show') ? dropdowns.classList.remove('show') : dropdowns.classList.toggle("show")
            :
            dropdowns.classList.remove('show')
    }
}
