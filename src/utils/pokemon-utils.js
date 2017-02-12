function getPokemonGeneration(pokemonId) {
	if(pokemonId) {
		switch(pokemonId) {
			case (pokemonId >= 1 && pokemonId <= 151) :
				return '1';
				break;
			case (pokemonId >= 152 && pokemonId <= 151) :
				return '2';
				break;
			case (pokemonId >= 153 && pokemonId <= 386) :
				return '3';
				break;
			case (pokemonId >= 387 && pokemonId <= 493) :
				return '4';
				break;
			case (pokemonId >= 494 && pokemonId <= 649) :
				return '5';
				break;
			case (pokemonId >= 650 && pokemonId <= 721) :
				return '6';
				break;
			case (pokemonId >= 722 && pokemonId <= 802) :
				return '7';
				break;
			default:
				return -1;
				break;
		}
	}
}
