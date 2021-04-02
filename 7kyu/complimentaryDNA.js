const DNAStrand = dna => {
    let x = dna.split('')
    let dnaKey = {
      'A': 'T',
      'T': 'A',
      'G': 'C',
      'C': 'G'
    }
    return x.map(char => dnaKey[char]).join('');
  }