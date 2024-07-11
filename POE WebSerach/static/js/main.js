$(document).ready(function() {
    var items = [
        { label: "Mind Of The Council", category: "Helmets", image: "../static/img/items/mind_of_the_council.jpg"},
        { label: "Shavronne's Wrappings", category: "Body Armor", image: "../static/img/items/shavronne's_wrappings.jpg"},
        { label: "Headhunter", category: "Belt", image: "../static/img/items/headhunter.jpg"},
        { label: "Mageblood", category: "Belt", image: "../static/img/items/mageblood.jpg"},
        { label: "Original Sin", category: "Ring", image: "../static/img/items/original_sin.jpg"},
        { label: "Mirror of Kalandra", category: "Currency", image: "../static/img/items/mirror_of_kalandra.jpg"},
        { label: "Divine Orb", category: "Currency", image: "../static/img/items/divine_orb.jpg"},
        { label: "Chaos Orb", category: "Currency", image: "../static/img/items/chaos_orb.jpg"},
        { label: "Voidforge", category: "Sword", image: "../static/img/items/voidforge.jpg"},
        { label: "Defiance of Destiny", category: "Necklace", image: "../static/img/items/defiance_of_destiny.jpg"},
        { label: "Kaom's Roots", category: "Currency", image: "../static/img/items/kaom's_roots.jpg"},
        { label: "Darkscorn", category: "Bow", image: "../static/img/items/darkscorn.jpg"},
        { label: "Atziri's Rule", category: "Staff", image: "../static/img/items/atziri's_rule.jpg"},
        { label: "Aegis Aurora", category: "Shield", image: "../static/img/items/aegis_aurora.jpg"},
        { label: "Empower Support", category: "Gem", image: "../static/img/items/empower_support.jpg"},
        { label: "Oriath's End", category: "Flask", image: "../static/img/items/oriath's_end.jpg"},
        { label: "Progenesis", category: "Flask", image: "../static/img/items/progenesis.jpg"},
        { label: "Unnatural Instinct", category: "Jewel", image: "../static/img/items/unnatural.jpg"},
        { label: "Celestial Cat Pet", category: "Pet", image: "../static/img/items/cat.jpg"},

    ];

    var selectedCategory = "All";

    $('#search').autocomplete({
        source: function(request, response) {
            var filteredItems = items.filter(function(item) {
                return selectedCategory === "All" || item.category === selectedCategory;
            });
            response($.ui.autocomplete.filter(filteredItems, request.term));
        },
        select: function(event, ui) {
            $('#search').data('selected-item', ui.item); 
        }
    });

    function displaySelectedItem() {
        var selectedItem = $('#search').data('selected-item');
        if (selectedItem && (selectedCategory === "All" || selectedItem.category === selectedCategory)) {
            $('#item-details').html(`
                <div class="item">
                    <img src="${selectedItem.image}" alt="${selectedItem.label}">
                </div>
            `);
        } else {
            $('#item-details').empty(); 
        }
    }

    $('#search').on('keyup', function(evt) {
        if (evt.keyCode === 13) {
            displaySelectedItem();
        }
    });

    $('.btn-default').on('click', function() {
        displaySelectedItem();
    });

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('#search_param').val(concept);
        selectedCategory = concept;
        $('#search').val(''); 
        $('#search').autocomplete('search', ''); 
    });
});
